#!/usr/bin/env python

import osquery

@osquery.register_plugin
class PythonPackagesTablePlugin(osquery.TablePlugin):
    def name(self):
        return "python_packages"

    def columns(self):
        return [
            osquery.TableColumn(name="name", type=osquery.STRING),
            osquery.TableColumn(name="version", type=osquery.STRING),
        ]

    def generate(self, context):
        query_data = []

        for package in __import__('pkg_resources').working_set:
            row = {}
            row["version"] = package.version
            row["name"]    = package.project_name
            query_data.append(row)
    
        return query_data


if __name__ == "__main__":
    osquery.start_extension(name="python_packages",
                            version="0.0.1",)

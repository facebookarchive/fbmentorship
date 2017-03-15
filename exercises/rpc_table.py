#!/usr/bin/env python
"""This source code is licensed under the BSD-style license found in the
LICENSE file in the root directory of this source tree. An additional grant
of patent rights can be found in the PATENTS file in the same directory.
"""

import osquery

@osquery.register_plugin
class RPCTablePlugin(osquery.TablePlugin):
    """Example table plugin"""
    def name(self):
        return "rpc"

    def columns(self):
        return [
            osquery.TableColumn(name="Name", type=osquery.STRING),
            osquery.TableColumn(name="Prog_Num", type=osquery.STRING),
        ]

    def generate(self, context):
        query_data = []

        with open("/etc/rpc", "r") as f:
            data = f.readlines()[3:]
        for line in data:
            words = line.split()



            row = {}
            row["Name"] = words[0]
            row["Prog_Num"] = words[1]
            query_data.append(row)

        return query_data



if __name__ == "__main__":
    osquery.start_extension(
        name="rpc_table",
        version="1.0.0",)
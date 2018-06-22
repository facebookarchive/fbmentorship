/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>
                  {siteConfig.tagline}
                </small>
              </h2>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button
                      href={
                        siteConfig.baseUrl +
                        "docs/" +
                        this.props.language +
                        "/program-overview.html"
                      }
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || "en";
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map(user => {
        return (
          <a href={user.infoLink}>
            <img src={user.image} title={user.caption} />
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={["bottom", "top"]} background="light">
            <GridBlock
              align="center"
              contents={[
                {
                  content: "Learn how to contribute to Open Source",
                  image: siteConfig.baseUrl + "img/contribute.png",
                  imageAlign: "top",
                  title: "Contribute"
                },
                {
                  content: "Become an Open Source mentor",
                  image: siteConfig.baseUrl + "img/mentor.png",
                  imageAlign: "top",
                  title: "Mentor"
                }
              ]}
              layout="fourColumn"
            />
          </Container>

          <Container padding={["bottom", "top"]}>
            <GridBlock
              contents={[
                {
                  content: "Whether this is your first time contributing or you want to pay forward any help you received in the past, check out what we're building to help build an engaged and welcoming open source community.",
                  imageAlign: "right",
                  title: "Learn How"
                }
              ]}
            />
          </Container>

        </div>
      </div>
    );
  }
}

module.exports = Index;

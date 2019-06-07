import React, { Component } from "react";

export default class experienceTestOne extends Component {
  render() {
    return (
      <div className="experiencePage-wrapper">
        <div className="header-banner-wrapper">
          <div className="header-background">
            <img
              className="header-background__image"
              src={require("../../static/assets/images/featuredExperience/heroBanner/heroBannerTest.jpg")}
            />
            <h1 className="header-background__title">Header Title</h1>
          </div>
        </div>
        <div className="experiencePage-content__wrapper">
          <div className="article-section">
            <div className="article-section__content">
              <h2>
                <span className="highlight">Article</span> Title
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vitae sem quis dolor sodales maximus hendrerit sit amet
                libero. Vestibulum mollis tempor efficitur. Mauris sit amet
                porta ligula. Nullam porta dolor a risus pharetra, non lobortis
                ipsum vehicula. Nulla pretium faucibus sem nec luctus. Aliquam
                urna velit, blandit quis consectetur eget, pretium sit amet
                ipsum. Praesent porta aliquam est, id rhoncus velit malesuada
                at. Vestibulum tincidunt congue libero, et pulvinar urna aliquet
                eget. Sed in tellus nisi. Suspendisse blandit risus sem, sed
                auctor elit mattis non. Pellentesque placerat imperdiet ipsum eu
                sollicitudin. Praesent eget varius lectus, nec scelerisque diam.
                Duis porttitor euismod dui, eget laoreet dui gravida sed.
              </p>
            </div>
            <div className="images-wrapper">
              <div className="images-container">
                <div className="image-small__one">
                  <img
                    src={require("../../static/assets/images/featuredExperience/gridImages/small1.jpg")}
                  />
                </div>
                <div className="image-small__two">
                  {" "}
                  <img
                    src={require("../../static/assets/images/featuredExperience/gridImages/small2.jpg")}
                  />
                </div>
                <div className="image-large">
                  <img
                    src={require("../../static/assets/images/featuredExperience/gridImages/verticalTest.jpg")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="guide-section-wrapper">
            <div className="guide-section-grid">
              <div className="guide-one">
                <div className="guide-image">Guide Image</div>
                <div className="guide-content">Guide Content</div>
              </div>
              <div className="guide-two">
                <div className="guide-image">Guide Image</div>
                <div className="guide-content">Guide Content</div>
              </div>
              <div className="local-interests__wrapper">
                <h3>Local Interests section header</h3>
                <div className="local-interests__image">
                  <div className="local-interests__header">
                    <h4>interests header</h4>
                    <p>interests content</p>
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

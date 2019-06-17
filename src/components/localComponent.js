import React, { Component } from "react";

export default class LocalComponent extends Component {
  render() {
    return (
      <div className="local-user-container">
        <div className="user-wrapper">
          <div className="user-image">
            <img
              src={require("../../static/assets/images/locals/hikeGuide1.png")}
            />
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content">
              <h4>Cora Vasquez</h4>
              <p>
                “I love hiking in Salt Lake City because the mountains are
                really steep and you can access them right from the heart of the
                city. The sunsets and sunrises are also incredible along the
                Wasatch Mountains, so try to time your hikes accordingly.”
              </p>
            </div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
            <img
              src={require("../../static/assets/images/locals/mountainBGuide2.png")}
            />
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content">
              <h4>Dale Sherman</h4>
              <p>
                "Utah is not only home to huge networks of mountain bike trails
                in various areas, it's also an adventurer's playground. Utah has it all. One
                of our favourite spots to explore is Zion National Park and
                Arches National Park, where beautiful natural features have been
                carved by wind and rain over the millenia. "
              </p>
            </div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
            <img
              src={require("../../static/assets/images/locals/skiGuide1.png")}
            />
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content">
              <h4>Kayla Reynolds</h4>
              <p>
                “I think a great place to stop after a long day of skiing is
                Porcupine Grill. It’s on the way home from any of the Cottonwood
                Canyon resorts. It’s definitely some of the best food in Utah
                and hits the spot after a good day of shredding. Don’t worry
                about going in your ski clothes, that’s the vibe there.”
              </p>
            </div>
          </div>
        </div>
        <div className="user-wrapper">
          <div className="user-image">
            <img
              src={require("../../static/assets/images/locals/rockGuide2.png")}
            />
          </div>
          <div className="user-text__wrapper">
            <div className="user-text__content">
              <h4>Mike Ortega</h4>
              <p>
                “If you approach climbing with psych and motivation, but also
                with general self-preservation and caution, there’s nothing you
                can’t do in Utah. Find the right people and get
                out there.”
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

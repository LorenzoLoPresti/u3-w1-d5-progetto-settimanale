import { Component } from "react";

class FooterIcons extends Component {
  render() {
    return (
      <div class="row">
        <div class="col col-12 text-left mb-2">
          <i class="fa fa-facebook footer-icon"></i>
          <i class="fa fa-instagram footer-icon"></i>
          <i class="fa fa-twitter footer-icon"></i>
          <i class="fa fa-youtube footer-icon"></i>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"></div>
      </div>
    );
  }
}
export default FooterIcons;

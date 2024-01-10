"use client";

import { WebTheme } from "@/app/theme/webTheme";

import ModalBootstrap from "./widget/modal/ModalBootstrap";
import { D_AboutUsView } from "./componentDashboard/D_AboutUs/D_AboutUsView";
import { D_CarsVieiw } from "./componentDashboard/D_Cars/D_CarsView";
import { D_HeadLink } from "./componentDashboard/D_HeadLink/D_HeadLink";

export const DashboardView = () => {
  return (
    <div>
      <D_HeadLink />
      
      <div className="container-fluid display-table">
        <div className="row display-table-row">
          <div
            className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
            style={{height:2000,}}
            id="navigation"
          >
            <div className="logo">
              <a href="home.html">
                <img
                  src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"
                  alt="merkery_logo"
                  className="hidden-xs hidden-sm"
                />
                <img
                  src="https://logoipsum.com/artwork/331"
                  alt="merkery_logo"
                  className="visible-xs visible-sm circle-logo"
                />
              </a>
            </div>
            <div className="navi"  >
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="fa fa-home" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden="true" />
                    <span className="hidden-xs hidden-sm">Log Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-10 col-sm-11 display-table-cell v-align">
            <div className="user-dashboard">
              <div>
                <div
                  className="collapse"
                  id="navbarToggleExternalContent"
                  data-bs-theme="dark"
                >
                  <div className="bg-dark p-4">
                    <h5 className="text-body-emphasis h4">Collapsed content</h5>
                    <span className="text-body-secondary">
                      Toggleable via the navbar brand.
                    </span>
                  </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                  <div className="container-fluid">
                  </div>
                </nav>
              </div>

              {/* Content Here */}

              <D_AboutUsView />
              <D_CarsVieiw/>    
              
              {/* Content Here */}
            </div>
          </div>
        </div>
      </div>
      <div id="add_project" className="modal fade" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header login-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
              <h4 className="modal-title">Add Project</h4>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Project Title" name="name" />
              <input type="text" placeholder="Post of Post" name="mail" />
              <input type="text" placeholder="Author" name="passsword" />
              <textarea placeholder="Desicrption" defaultValue={""} />
            </div>
            <div className="modal-footer">
              <button type="button" className="cancel" data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="add-project"
                data-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    </div>
  );
};

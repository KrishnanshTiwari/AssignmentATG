import { useState } from "react";
import "./Blog.css";
import Dropdown from "react-bootstrap/Dropdown";
import group from "../../assets/groupadd.png";
import author3 from "../../assets/author3.png";
import author4 from "../../assets/author4.png";
import blog3 from "../../assets/blog3.png";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import author1 from "../../assets/author1.png";
import author2 from "../../assets/author2.png";
import { BsThreeDots, BsFillShareFill } from "react-icons/bs";
import { BiCalendarEvent } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillEye } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { MdErrorOutline } from "react-icons/md";
import { Modal } from "react-responsive-modal";
import LoginModal from "../Header/LoginModal";
const Blog = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
   
    <section className="container pt-5 ">
      <div className="d-sm-block d-none">
        <div className="row blog ">
          <div className="col-md-8 col-sm-7">
            <ul className="blog-tabs">
              <li className="active">
                All Post
              </li>
              <li>
                Event
              </li>
              <li>
                Education
              </li>
              <li>
                Job 
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-5">
            <div className=" justify-content-end d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                  className="write-btn"
                >
                  Write Post
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1" active>
                    Dropdown
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <button className="join-btn" onClick={onOpenModal}>
                <img src={group} alt="" /> Join Group
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <LoginModal />
      </Modal>
      <div className="d-sm-none d-block">
        <div className="row  ">
          <div className="col-6 d-flex align-items-center">
            <p className=" post-st">Posts(368)</p>
          </div>
          <div className=" col-6">
            <Dropdown className="d-flex">
              <Dropdown.Toggle
                id="dropdown-basic"
                className="drowdown-btn ms-auto"
                variant="none"
              >
                Filter 
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1" 
                >
                  Event
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                >
                  Education
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                >
                  Job
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
        
                <div className="blog-card">
                  <div className="card-top">
                    <div className="thumb">
                      <img src={blog1} alt="" />
                    </div>
                  </div>
                  <div className="card-bottom">
                    <p className="category">✍️ Article</p>
                    <div className="d-flex justify-content-between ">
                      <h2 className="title">What if famous brands had regular fonts? Meet RegulaBrands!</h2>
                      <button className="menu_icon">
                        {" "}
                        <BsThreeDots />
                      </button>
                    </div>
                    <p className="subtitle">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div className="author-info d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={author1} alt="" />
                        <span className="author-name">Sarthak Kamra</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="views">
                          <AiFillEye />
                          <span>1.4k views</span>
                        </div>
                        <button className="share">
                          <BsFillShareFill />
                        </button>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <div  className="blog-card">
                <div className="card-top">
                  <div className="thumb">
                    <img src={blog2} alt="" />
                  </div>
                </div>
                <div className="card-bottom">
                  <p className="category">🔬️ Education</p>
                  <div className="d-flex justify-content-between ">
                    <h2 className="title">Tax Benefits for Investment under National Pension Scheme launched by Government</h2>
                    <button className="menu_icon">
                      {" "}
                      <BsThreeDots />
                    </button>
                  </div>
                  <p className="subtitle">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                  <div className="author-info d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={author2} alt="" />
                      <span className="author-name">Sarah West</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="views">
                        <AiFillEye />
                        <span>1.4k views</span>
                      </div>
                      <button className="share">
                        <BsFillShareFill />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            
          
          <div className="blog-card">
            <div className="card-top">
              <div className="thumb">
                <img src={blog3} alt="" />
              </div>
            </div>
            <div className="card-bottom">
              <p className="category">🗓️ Meetup</p>
              <div className="d-flex justify-content-between ">
                <h2 className="title">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </h2>
                <button className="menu_icon">
                  {" "}
                  <BsThreeDots />
                </button>
              </div>
              <div className="details d-flex gap-5">
                <div className="date">
                  <BiCalendarEvent />
                  Fri, 12 Oct, 2018
                </div>
                <div className="location">
                  <IoLocationOutline />
                  Ahmedabad, India
                </div>
              </div>
              <button className="visit-btn">Visit Website</button>
              <div className="author-info d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={author3} alt="" />
                  <span className="author-name">Ronal Jones</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="views">
                    <AiFillEye />
                    <span>1.4k views</span>
                  </div>
                  <button className="share">
                    <BsFillShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <div className="card-bottom">
              <p className="category">💼️ Job</p>
              <div className="d-flex justify-content-between ">
                <h2 className="title">Software Developer</h2>
                <button className="menu_icon">
                  {" "}
                  <BsThreeDots />
                </button>
              </div>
              <div className="details d-flex gap-5">
                <div className="date">
                  <MdWorkOutline />
                  Software Developer
                </div>
                <div className="location">
                  <IoLocationOutline />
                  Noida, India
                </div>
              </div>
              <button className="visit-btn text-success">
                Apply on Timesjobs
              </button>
              <div className="author-info d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <img src={author4} alt="" />
                  <span className="author-name">Joseph Gray</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="views">
                    <AiFillEye />
                    <span>1.4k views</span>
                  </div>
                  <button className="share">
                    <BsFillShareFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-end flex-column">
            <div className="mylocation d-flex justify-content-between ms-auto">
              <div className="location">
                <IoLocationOutline className="location-ico" />
                <input type="text" placeholder="Noida, India" />
                <button className="edit">
                  <RiPencilFill />
                </button>
              </div>
            </div>
            <div className="report ms-auto">
              <MdErrorOutline />
              <span>
                Your location will help us serve better and extend a
                personalised experience.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

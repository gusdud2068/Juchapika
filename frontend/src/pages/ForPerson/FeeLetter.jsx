import React from "react";
import styles from "./FeeLetter.module.css";
import { useNavigate } from "react-router-dom";
import car from "../../assets/car1.png";
import carlicense from "../../assets/car1license.png";
import { useState } from "react";

// import axios from "axios";
// import { useState, useEffect } from "react";

export default function Feeletter() {
  const [modal, Setmodal] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    Setmodal(true);
  };
  const closeModal = () => {
    Setmodal(false);
  };
  return (
    <div className={styles.background}>
      <div className={styles.nav}>
        <div>주정차위반과태료</div>
      </div>
      <div className={styles.body}>
        <div className={styles.mininav}>
          <div className={styles.content1}>
            <div className={styles.center}>
              <div style={{ fontWeight: "700", fontSize: "1.8em" }}>
                231 가 2475
              </div>
              <div>차량소유자: 정우영</div>
            </div>
            <hr style={{ marginTop: "30px", width: "100%" }}></hr>
          </div>
          <div
            onClick={() => {
              navigate("/feeletter");
            }}
            className={styles.content}
            style={{ fontWeight: "800" }}
          >
            주정차위반과태료
          </div>
          <div
            className={styles.content}
            onClick={() => {
              navigate("/payhistory");
            }}
          >
            납부이력
          </div>
        </div>
        <div className={styles.area}>
          <div style={{ fontWeight: "600", fontSize: "1.1em" }}>
            납세자 정보
          </div>
          <div className={styles.a}>
            <div className={styles.img}>
              <img src={car} alt="go" width="250px" height="200px" />
            </div>
            <div className={styles.b0}>
              <div className={styles.b}>
                <div className={styles.c}>
                  <div style={{ paddingBottom: "5px" }}>납세자</div>
                  <div style={{ paddingBottom: "5px" }}>전화번호</div>
                  <div style={{ paddingBottom: "5px" }}>주소</div>
                </div>
                <div className={styles.c1}>
                  <div style={{ paddingBottom: "5px" }}>정우영</div>
                  <div style={{ paddingBottom: "5px" }}>010-1234-5678</div>
                  <div style={{ paddingBottom: "5px" }}>
                    함경북도 함흥시 냉면로 665-1
                  </div>
                </div>
              </div>
              <div className={styles.d}>
                <div>번호판</div>
                <div style={{ paddingLeft: "90px" }}>
                  <img src={carlicense} alt="go" width="150px" height="50px" />
                </div>
              </div>
              <div className={styles.e}>
                <div className={styles.btn} onClick={openModal}>
                  <div>단속녹화시청</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ fontWeight: "600", fontSize: "1.1em" }}>부과내역</div>
          <div className={styles.f}>
            <div className={styles.g}>
              <div className={styles.f}>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>납부기한</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>2023/08/05</div>
                </div>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>과목</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>납기내금액</div>
                </div>
                <div className={styles.g2}>
                  <div style={{ width: "100px" }}>과태료</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>40,000</div>
                </div>
                <div className={styles.g2}>
                  <div style={{ width: "100px" }}>가산금</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>0</div>
                </div>
                <div className={styles.g2}>
                  <div style={{ width: "100px" }}>합계금액</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>40,000</div>
                </div>
              </div>
              <div className={styles.f}>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>적발일시</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>2023/05/04</div>
                </div>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>적발장소</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>주소적어야함</div>
                </div>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>법조항</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>도로교통법 제 32-34조</div>
                </div>
                <div className={styles.g1}>
                  <div style={{ width: "100px" }}>고지번호</div>
                  <div className={styles.empty}></div>
                  <div style={{ width: "100px" }}>202011101633</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.h}>
            <div className={styles.h1}>
              <div>가상계좌번호(납기내)</div>
              <div className={styles.empty}></div>
              <div>농협) 352-4985-9845</div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <div onClick={closeModal} className={styles.x}>
              <div>x</div>
            </div>
            <div className={styles.modalin}>
              <div className={styles.centre}>영상플레이</div>
              <div className={styles.centre} style={{ padding: "2%" }}>
                <video
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  width="500"
                  height="300"
                  controls
                />
              </div>
            </div>
          </div>
          <div className={styles.back} onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}
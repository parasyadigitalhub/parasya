import { AiOutlineFileText } from "react-icons/ai";
import { RiCustomerServiceLine } from "react-icons/ri";
const Instruction = () => {
  return (
    <div>
      <p className="text-center text-2xl font-bold font-nunito text-[#EBEBEB] underline mb-4 uppercase pt-3">
        How it Works
      </p>
      <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center gap-[50px] lg:gap-[150px] bg-[#1B1B1B] pb-4">
        <div className="text-white flex flex-col justify-center items-center">
          <div
            className="w-32 h-32 rounded-[50%] flex justify-center items-center overflow-hidden object-cover"
            style={{
              background:
                "radial-gradient(107.5% 107.5% at 50% 50%, #C3282E 0%, #E78E26 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="78"
              height="78"
              viewBox="0 0 78 78"
              fill="none"
            >
              <path
                d="M42.8076 9.75H29.25C23.1217 9.75 20.0576 9.75 18.1538 11.6538C16.25 13.5576 16.25 16.6217 16.25 22.75V55.25C16.25 61.3783 16.25 64.4424 18.1538 66.3462C20.0576 68.25 23.1217 68.25 29.25 68.25H48.75C54.8783 68.25 57.9424 68.25 59.8462 66.3462C61.75 64.4424 61.75 61.3783 61.75 55.25V28.6924C61.75 27.3639 61.75 26.6997 61.5026 26.1025C61.2552 25.5052 60.7855 25.0355 59.8462 24.0962L47.4038 11.6538C46.4645 10.7145 45.9948 10.2448 45.3975 9.99739C44.8003 9.75 44.1361 9.75 42.8076 9.75Z"
                stroke="white"
                stroke-width="3"
              />
              <path
                d="M29.25 42.25L48.75 42.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M29.25 55.25L42.25 55.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M42.25 9.75V22.75C42.25 25.8141 42.25 27.3462 43.2019 28.2981C44.1538 29.25 45.6859 29.25 48.75 29.25H61.75"
                stroke="white"
                stroke-width="3"
              />
            </svg>
          </div>
          <p className="font-ralewar font-bold text-lg p-3">1.Fill Form</p>
          <span className="font-mulish w-40 lg:w-56 text-center">
            Simply fill the above form to get started.
          </span>
        </div>
        <div id="arrow" className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="46"
            viewBox="0 0 21 46"
            fill="none"
          >
            <path
              d="M1.25 1.5L18.75 23L1.25 44.5"
              stroke="#33363F"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <div className="w-32 h-32 rounded-[50%] flex justify-center items-center  overflow-hidden bg-[#FC9906] object-cover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="127"
              height="127"
              viewBox="0 0 127 127"
              fill="none"
            >
              <path
                d="M80.0636 76.1334L74.2188 74.1861L72.1162 69.9867C74.0071 68.062 75.3223 65.5164 75.7626 62.8608L76.0222 61.2888H78.2631C80.2979 61.2888 81.9545 59.635 81.9545 57.5974V49.8478C81.9545 39.6739 73.6769 31.3937 63.5 31.3937C53.3005 31.3937 45.0483 39.6485 45.0483 49.8478V57.5974C45.0483 59.2004 46.0756 60.572 47.5093 61.0772V62.5193C47.5093 64.5541 49.1631 66.2107 51.2008 66.2107H52.2817C52.8151 67.3677 53.5065 68.443 54.3447 69.4053C54.5197 69.6057 54.7003 69.8033 54.8866 69.9924L52.7869 74.1861L46.9392 76.1334C40.1405 78.3996 35.2044 85.5566 35.2044 93.1482C35.2044 93.8283 35.7547 94.3815 36.4349 94.3815H90.5651C91.2453 94.3815 91.7956 93.8311 91.7956 93.1482C91.7956 85.5537 86.8624 78.3967 80.0636 76.1334ZM79.4935 57.5946C79.4935 58.2719 78.9432 58.8251 78.2631 58.8251H76.3835C76.6967 56.4065 76.9056 53.827 76.9902 51.2871C76.9902 51.2165 76.993 51.146 76.9959 51.0782H79.4907L79.4935 57.5946ZM48.737 58.8251C48.0596 58.8251 47.5065 58.2747 47.5065 57.5946V51.0754H50.0041C50.007 51.2024 50.0126 51.3322 50.0183 51.4621C50.0183 51.4677 50.0183 51.4705 50.0183 51.4705V51.4762C50.1029 53.9456 50.3118 56.4573 50.6137 58.8251H48.737ZM51.1979 63.7469C50.5206 63.7469 49.9675 63.1966 49.9675 62.5165V61.2832H50.9778L51.2375 62.8551C51.2883 63.1514 51.3475 63.4506 51.4209 63.7441L51.1979 63.7469ZM49.9703 48.6173H47.5545C48.1782 40.371 55.0587 33.8546 63.5 33.8546C71.9046 33.8546 78.8162 40.3738 79.4456 48.6173H77.0297C76.9423 41.8244 71.4079 36.3155 64.6007 36.3155H62.3993C55.5921 36.3127 50.0578 41.8216 49.9703 48.6173ZM62.3993 38.7736H64.6007C70.1125 38.7736 74.5744 43.2834 74.5716 48.7895C74.5716 49.1761 74.5688 49.5119 74.5603 49.8196V49.8308L73.0222 49.6107C68.8425 49.0152 64.8942 47.0426 61.9083 44.0539C61.6769 43.8225 61.3636 43.6926 61.039 43.6926C57.7342 43.6926 54.5705 45.1997 52.4821 47.7424C52.9985 42.7359 57.2319 38.7736 62.3993 38.7736ZM53.9722 63.7469C53.3569 61.698 52.6486 55.6727 52.4962 51.8092L54.1528 49.6023C55.674 47.5731 58.0362 46.3144 60.5564 46.1705C63.8669 49.3229 68.151 51.4028 72.6779 52.0491L74.4897 52.3087C74.3712 54.8769 74.1229 57.4563 73.7673 59.8269V59.8298C73.6544 60.5946 73.5669 61.0828 73.3383 62.4544C72.6892 66.3631 69.771 69.8964 65.9243 70.8588C64.3382 71.2567 62.6703 71.2567 61.087 70.8588C58.6825 70.2576 56.4811 68.5954 55.0587 66.2135H57.5649C58.0729 67.6471 59.4417 68.6744 61.0447 68.6744H63.5C65.5405 68.6744 67.1915 67.0234 67.1915 64.983C67.1915 62.9454 65.5377 61.2888 63.5 61.2888H61.0419C59.3993 61.2888 58.0531 62.3499 57.5592 63.7497H53.9722V63.7469ZM60.9374 73.3451C61.7813 73.5201 62.6392 73.6132 63.5 73.6132C64.1745 73.6132 64.849 73.5567 65.5122 73.4467L63.3363 75.7439L60.9374 73.3451ZM61.6458 77.536L57.7455 81.662C56.6731 79.6046 55.7474 77.4683 54.991 75.2754L56.4586 72.3432L61.6458 77.536ZM70.3383 71.9284L72.009 75.2754C71.2498 77.4683 70.3298 79.6103 69.2545 81.6648L65.0776 77.4908L70.3383 71.9284ZM59.8114 64.9774C59.8114 64.2972 60.3617 63.7441 61.0419 63.7441H63.5C64.1773 63.7441 64.7305 64.2972 64.7305 64.9774C64.7305 65.6575 64.1802 66.2078 63.5 66.2078H61.0419C60.3617 66.2078 59.8114 65.6575 59.8114 64.9774ZM37.7162 91.9177C38.2016 85.8247 42.26 80.2848 47.7153 78.4617L52.8941 76.7401C53.8452 79.3619 55.0192 81.9103 56.3965 84.3346C56.3993 84.3374 56.3993 84.3402 56.4021 84.3459C57.4068 86.1153 58.5414 87.8453 59.769 89.4878L61.2817 91.9149L37.7162 91.9177ZM63.5 90.8227L61.8321 88.1445C61.8151 88.1134 61.7954 88.0852 61.7728 88.0598C60.7766 86.7278 59.8452 85.3393 59.0014 83.9169L63.3871 79.2773L68.0099 83.9C67.1576 85.3336 66.2234 86.7278 65.2272 88.0598C65.1679 88.136 65.2554 88.0118 63.5 90.8227ZM65.7155 91.9177L67.231 89.4907C68.4643 87.8425 69.6045 86.1012 70.6233 84.3063C70.6289 84.2951 70.6346 84.2838 70.6402 84.2725C72.0005 81.8708 73.1633 79.3422 74.1059 76.7401L79.2819 78.4617C84.7429 80.2848 88.7984 85.8218 89.2838 91.9177H65.7155Z"
                fill="#F4F4F4"
              />
              <path
                d="M59.8113 64.9774C59.8113 64.2973 60.3617 63.7441 61.0418 63.7441H63.5C64.1773 63.7441 64.7305 64.2973 64.7305 64.9774C64.7305 65.6576 64.1801 66.2079 63.5 66.2079H61.0418C60.3617 66.2079 59.8113 65.6576 59.8113 64.9774Z"
                fill="#FF0000"
              />
              <path
                d="M79.4935 57.5946C79.4935 58.2719 78.9432 58.8251 78.263 58.8251H76.3834C76.6967 56.4065 76.9055 53.827 76.9902 51.2871C76.9902 51.2165 76.993 51.146 76.9958 51.0782H79.4907L79.4935 57.5946Z"
                fill="#FF0000"
              />
              <path
                d="M48.737 58.8251C48.0596 58.8251 47.5065 58.2748 47.5065 57.5946V51.0754H50.0041C50.007 51.2024 50.0126 51.3323 50.0182 51.4621C50.0182 51.4677 50.0182 51.4705 50.0182 51.4705V51.4762C50.1029 53.9456 50.3118 56.4573 50.6137 58.8251H48.737Z"
                fill="#FF0000"
              />
            </svg>
          </div>
          <p className="font-ralewar font-bold text-lg p-3">
            2. Call to discuss
          </p>
          <span className="font-mulish w-40 lg:w-56 text-center">
            Our startup expert will connect with you & completelegalities.
          </span>
        </div>
        <div id="arrow" className="hidden lg:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="46"
            viewBox="0 0 21 46"
            fill="none"
          >
            <path
              d="M1.25 1.5L18.75 23L1.25 44.5"
              stroke="#33363F"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <div className="w-32 h-32 rounded-[50%] bg-[#038100] flex justify-center items-center overflow-hidden object-cover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
            >
              <path
                d="M70.8406 34.9555C71.3484 34.9555 71.7635 34.5373 71.7635 34.0295V27.5983C71.7635 25.0996 69.6924 23.067 67.1428 23.067H30.041C27.4714 23.067 25.4589 25.0595 25.4589 27.5983V68.6455C25.4589 71.2059 27.513 73.2879 30.041 73.2879H39.0634V79.6574C39.0634 79.983 39.2223 80.2778 39.4893 80.4398C39.7625 80.6127 40.1005 80.622 40.3829 80.48L44.8755 78.2344L49.3651 80.48C49.4994 80.5525 49.6398 80.5818 49.771 80.5818C49.9423 80.5818 50.1044 80.5294 50.2587 80.4383C50.5334 80.2762 50.6939 79.9815 50.6939 79.6558V73.2864L67.1412 73.2555C69.6908 73.2555 71.762 71.1843 71.762 68.6424V62.202C71.762 61.6942 71.3468 61.2868 70.8391 61.2868H64.408V34.9555H70.8406ZM64.4095 27.6616C64.4095 26.1491 65.6411 24.919 67.1536 24.9082C68.6753 24.9082 69.9269 26.1182 69.9269 27.5999V33.1174H64.4095V27.6616ZM48.8543 78.1773L45.2907 76.387C45.0237 76.2666 44.7212 76.2666 44.465 76.387L40.8937 78.1773V67.3259C42.1207 68.0065 43.4927 68.3723 44.9141 68.3723C46.3062 68.3723 47.6566 68.0266 48.8543 67.3768V78.1773ZM49.342 64.7639C49.2108 64.8365 49.0997 64.9383 49.0179 65.0495C47.8727 66.0048 46.4158 66.5326 44.9157 66.5326C43.3199 66.5326 41.7966 65.9446 40.6051 64.8766C39.2547 63.6574 38.4831 61.9195 38.4831 60.1123C38.4831 56.5564 41.3784 53.6811 44.9157 53.6811C48.4607 53.6811 51.3467 56.5564 51.3467 60.1123C51.3467 61.8686 50.626 63.5555 49.342 64.7639ZM50.6955 71.4498V66.0156C52.2789 64.4614 53.1864 62.3378 53.1864 60.1123C53.1864 55.5501 49.4793 51.8414 44.9157 51.8414C40.3628 51.8414 36.6573 55.5501 36.6573 60.1123C36.6573 62.2869 37.5185 64.3889 39.0634 65.9338V71.4606H30.041C28.527 71.4606 27.2939 70.1904 27.2939 68.6455V27.5999C27.2939 26.0874 28.5054 24.9082 30.041 24.9082H63.499C62.9202 25.6799 62.573 26.626 62.573 27.6616V68.647C62.573 69.6934 62.9279 70.6596 63.5067 71.4313L50.6955 71.4498ZM69.9285 63.128V68.6455C69.9285 70.1503 68.6599 71.4205 67.1428 71.4297C65.6411 71.4205 64.4095 70.1719 64.4095 68.6455V63.128H69.9285Z"
                fill="#ECECEC"
              />
              <path
                d="M48.8543 67.3769V78.1773L45.2908 76.387C45.0238 76.2666 44.7213 76.2666 44.4651 76.387L40.8938 78.1773V67.3259C42.1207 68.0065 43.4928 68.3723 44.9142 68.3723C46.3078 68.3723 47.6582 68.0266 48.8543 67.3769Z"
                fill="#C3282E"
              />
              <path
                d="M44.9157 53.681C41.3783 53.681 38.483 56.5563 38.483 60.1122C38.483 61.921 39.2547 63.6573 40.6051 64.8766C41.795 65.9446 43.3198 66.5326 44.9157 66.5326C46.4173 66.5326 47.8727 66.0047 49.0178 65.0494C49.0996 64.9383 49.2107 64.8364 49.3419 64.7639C50.626 63.5554 51.3467 61.8685 51.3467 60.1107C51.3467 56.5563 48.4591 53.681 44.9157 53.681ZM44.9157 64.7037C42.383 64.7037 40.3227 62.6418 40.3227 60.1107C40.3227 57.5718 42.383 55.5084 44.9157 55.5084C47.456 55.5084 49.5071 57.5718 49.5071 60.1107C49.5055 62.6418 47.456 64.7037 44.9157 64.7037Z"
                fill="#C3282E"
              />
              <path
                d="M44.9157 55.5084C42.3831 55.5084 40.3228 57.5719 40.3228 60.1107C40.3228 62.6403 42.3831 64.7038 44.9157 64.7038C47.456 64.7038 49.5071 62.6418 49.5071 60.1107C49.5056 57.5734 47.456 55.5084 44.9157 55.5084ZM44.9157 62.8656C43.4017 62.8656 42.1639 61.6248 42.1639 60.1107C42.1639 58.5874 43.4017 57.3481 44.9157 57.3481C46.4374 57.3481 47.6767 58.5874 47.6767 60.1107C47.6767 61.6263 46.4374 62.8656 44.9157 62.8656Z"
                fill="#ECECEC"
              />
              <path
                d="M57.1836 41.6892H32.6863C32.1831 41.6892 31.7695 42.1013 31.7695 42.6106C31.7695 43.1168 32.1831 43.5289 32.6863 43.5289H57.1836C57.6929 43.5289 58.1034 43.1168 58.1034 42.6106C58.1019 42.1013 57.6929 41.6892 57.1836 41.6892Z"
                fill="#ECECEC"
              />
              <path
                d="M53.5089 45.3655H36.364C35.8578 45.3655 35.4442 45.7776 35.4442 46.2838C35.4442 46.7915 35.8578 47.2036 36.364 47.2036H53.5089C54.0198 47.2036 54.4288 46.7915 54.4288 46.2838C54.4288 45.7776 54.0198 45.3655 53.5089 45.3655Z"
                fill="#ECECEC"
              />
              <path
                d="M57.1836 38.016H53.5089C53.0027 38.016 52.5922 38.4281 52.5922 38.9358C52.5922 39.4421 53.0027 39.8541 53.5089 39.8541H57.1836C57.6929 39.8541 58.1034 39.4421 58.1034 38.9358C58.1019 38.4265 57.6929 38.016 57.1836 38.016Z"
                fill="#ECECEC"
              />
              <path
                d="M32.6863 39.8525H49.8373C50.342 39.8525 50.7556 39.4405 50.7556 38.9342C50.7556 38.4265 50.342 38.0144 49.8373 38.0144H32.6863C32.1831 38.0144 31.7695 38.4265 31.7695 38.9342C31.7695 39.442 32.1831 39.8525 32.6863 39.8525Z"
                fill="#ECECEC"
              />
              <path
                d="M35.7792 34.7796C35.9474 34.9123 36.1465 34.9756 36.3456 34.9756C36.6172 34.9756 36.8888 34.8506 37.0694 34.6191L39.2007 31.8781L41.3367 34.6191C41.5096 34.8429 41.7765 34.9756 42.0605 34.9756C42.346 34.9756 42.6099 34.8429 42.7843 34.6191L44.9234 31.8781L47.0517 34.6191C47.2261 34.8429 47.4977 34.9756 47.7801 34.9756C48.0641 34.9756 48.3326 34.8429 48.5055 34.6191L50.6368 31.8781L52.7713 34.6191C53.083 35.0188 53.6633 35.0914 54.0599 34.7796C54.4628 34.4694 54.5322 33.8922 54.2235 33.4924L51.3637 29.8192C51.1878 29.5924 50.9193 29.4627 50.6353 29.4627C50.3529 29.4627 50.0859 29.5924 49.9115 29.8192L47.7786 32.5587L45.6472 29.8192C45.4713 29.5924 45.2058 29.4627 44.9219 29.4627C44.6363 29.4627 44.3709 29.5924 44.195 29.8192L42.059 32.5587L39.9261 29.8177C39.7563 29.5908 39.4862 29.4612 39.1992 29.4612C38.9152 29.4612 38.6528 29.5908 38.4754 29.8177L35.6171 33.4909C35.3069 33.8922 35.3779 34.4694 35.7792 34.7796Z"
                fill="#ECECEC"
              />
            </svg>
          </div>
          <p className="font-ralewar font-bold text-lg p-3">
            3. Get Incorporation
          </p>
          <span className="font-mulish w-40 lg:w-56 text-center">
            Get your company incorporation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Instruction;

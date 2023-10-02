import Image from "next/image";
import MemberList from "./MemberList";
const AboutUs = () => {
  let members = [
    {
      img: "'/team/rishaan.jpg'",
      name: "Rishaan",
      role: "founder",
      instagram: "",
      facebook: "",
      youtube: "",
    },
    {
      img: "/team/arjun.jpg",
      name: "Arjun",
      role: "Founder",
      instagram: "",
      facebook: "",
      youtube: "",
    },
    {
      img: "/team/Prajyu.jpg",
      name: "Prajyu",
      role: "web developer",
      instagram: "",
      facebook: "",
      youtube: "",
    },
    {
      img: "/team/abhay.jpg",
      name: "Abhay",
      role: "web developer",
      instagram: "",
      facebook: "",
      youtube: "",
    },
    {
      img: "",
      name: "rishaan",
      role: "",
      instagram: "",
      facebook: "",
      youtube: "",
    },
  ];
  return (
    <div className="relative w-full h-full bg-pearlwhite">
      <div className=" top-0 left-0  w-full h-1/2 flex justify-between items-center">
        <div className="relative text-pred text-6xl font-raleway font-bold p-4 text-center w-1/2">
          <p className="text-center leading-[150%] drop-shadow-xl">
            We Are The <br />{" "}
            <span className="about-text-grad">Dream Makers</span>
          </p>
        </div>
        <div className="relative h-full w-1/2 drop-shadow-3xl hover:filter-none duration-300 ease-in-out rounded-lg  mt-16 mx-8">
          <Image
            src="/team/prajyuwork.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="relative p-4 pt-24">
        <div className="w-full text-center">
          <span className="text-5xl border-b border-black  font-bold font-raleway">
            Why Partner With Us
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-16 gap-6 place-items-center w-full">
          <div className="w-[600px] h-[150px] flex justify-around items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
              >
                <circle
                  cx="75"
                  cy="75"
                  r="75"
                  fill="#FC9925"
                  fill-opacity="0.7"
                />
                <path
                  d="M114.407 87.326L105.783 81.5767"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M118 68.6406H107.22"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M112.011 46.6016L103.627 52.3509"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M96.4401 31.9888L90.4513 39.8941"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M73.922 26V37.0195"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M50.4457 34.8635L56.195 42.0502"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M36.312 50.4346L44.4568 54.507"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M35.3538 87.0863L43.9777 83.2535M32 69.1198H41.1031"
                  stroke="black"
                  stroke-width="5.27019"
                  stroke-linecap="round"
                />
                <path
                  d="M62.1838 109.844H86.3788M64.5794 117.27H83.5042M66.9749 124.217H81.1086"
                  stroke="black"
                  stroke-width="3.83287"
                  stroke-linecap="round"
                />
                <path
                  d="M85.6598 103.616H62.4235C62.4235 98.1059 57.6325 88.0446 52.3618 82.5349C49.7272 79.1811 48.6939 75.2065 48.2898 70.5572C47.811 65.0474 49.4874 60.4958 51.6436 56.663C54.4737 51.6323 62.5667 43.6312 74.6403 44.2062C89.7322 44.9248 95.2544 52.8806 97.6375 57.3817C99.7936 61.4541 100.273 66.0056 100.273 70.5572C100.273 72.9527 99.1148 78.702 95.7212 82.7744C90.9301 88.5237 85.6598 95.4708 85.6598 103.616Z"
                  stroke="black"
                  stroke-width="3.83287"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-8 font-raleway">
              <span className="text-xl font-bold ">Innovation</span>
              <span className="text-xs pt-4">
                We are always pushing the boundaries of what is possible and are
                committed to developing innovative products and services that
                are designed to meet the needs of our clients and customers
              </span>
            </div>
          </div>
          <div className="w-[600px] h-[150px] flex justify-around items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
              >
                <circle
                  cx="75"
                  cy="75"
                  r="75"
                  fill="#281EEE"
                  fill-opacity="0.7"
                />
                <path
                  d="M55.0151 96.5528L43.6852 115.863C43.4976 116.183 43.7948 116.568 44.1519 116.468L56.3658 113.044C56.5864 112.983 56.8151 113.113 56.8748 113.334L60.3168 126.078C60.4127 126.434 60.8909 126.495 61.0728 126.175L74.3404 102.835C74.4967 102.56 74.8916 102.557 75.053 102.829L88.8995 126.164C89.0889 126.484 89.5707 126.409 89.6551 126.048L92.6216 113.347C92.6746 113.12 92.9052 112.983 93.1303 113.043L105.851 116.479C106.209 116.575 106.502 116.189 106.313 115.871L94.7789 96.4498"
                  stroke="black"
                  stroke-width="2.67839"
                  stroke-linecap="round"
                />
                <path
                  d="M68.201 59.9824C70.1298 58.9334 73.8394 56.5504 76.6284 51.7492C76.7104 51.6081 76.7677 51.453 76.8404 51.307C77.8343 49.3108 83.9415 48.6047 82.8291 54.0075L80.8719 60.7035M80.8719 60.7035H79.0176M80.8719 60.7035H87.4648C88.6323 60.7722 90.9673 61.7336 90.9673 65.0301C90.9673 68.3266 90.9673 73.2027 90.9673 75.2286C91.0017 76.2931 90.2462 78.4839 86.9497 78.7311C83.6533 78.9784 77.9531 78.8342 75.5151 78.7311C73.8668 78.7311 70.2201 78.3191 68.8191 76.6708"
                  stroke="black"
                  stroke-width="2.67839"
                  stroke-linecap="round"
                />
                <path
                  d="M60.8869 58.1281H66.4498C67.5876 58.1281 68.5101 59.0505 68.5101 60.1884V76.8769C68.5101 78.0147 67.5876 78.9372 66.4498 78.9372H60.8869C59.7491 78.9372 58.8266 78.0147 58.8266 76.8769V60.1884C58.8266 59.0505 59.7491 58.1281 60.8869 58.1281Z"
                  stroke="black"
                  stroke-width="2.67839"
                  stroke-linecap="round"
                />
                <path
                  d="M62.0203 39.2763C68.991 35.5334 85.7953 32.5804 97.4574 47.5176C105.179 57.4071 105.596 75.3317 94.4699 85.118C83.3443 94.9044 67.5828 95.2136 55.8392 85.118C44.9178 75.7293 45.0228 58.2311 49.8645 51.5351"
                  stroke="black"
                  stroke-width="2.67839"
                  stroke-linecap="round"
                />
                <path
                  d="M43.5211 43.6506L44.1725 39.449C44.7162 35.9423 47.7963 33.396 51.3427 33.5216L52.6573 33.5681C55.1943 33.6579 57.5813 32.3682 58.8966 30.1969L60.0699 28.26C61.8928 25.2509 65.6648 24.0606 68.8846 25.4785L71.6354 26.6899C73.4495 27.4888 75.5172 27.4817 77.3257 26.6703L80.4735 25.2583C83.4265 23.9335 86.9027 24.8043 88.8824 27.3648L91.3526 30.5596C92.5514 32.1101 94.345 33.0874 96.2978 33.2543L99.5115 33.529C102.862 33.8154 105.537 36.4426 105.883 39.7878L106.225 43.0929C106.415 44.9369 107.329 46.6301 108.766 47.8015L112.03 50.4625C114.395 52.3897 115.24 55.6252 114.121 58.4626L112.614 62.2819C111.945 63.9782 111.963 65.8685 112.666 67.5513L113.846 70.3792C115.106 73.3967 114.111 76.8843 111.448 78.7822L108.977 80.5435C107.291 81.7455 106.222 83.632 106.059 85.6965L105.825 88.6618C105.57 91.8982 103.124 94.5349 99.9162 95.0327L96.0963 95.6254C94.3861 95.8908 92.8346 96.78 91.741 98.1214L89.0496 101.423C87.0747 103.845 83.7336 104.667 80.8607 103.435L77.6434 102.056C75.8889 101.305 73.9036 101.301 72.1466 102.047L68.88 103.434C65.9828 104.664 62.6209 103.81 60.6611 101.347L58.2252 98.2859C57.0305 96.7846 55.2724 95.8389 53.3612 95.6698L50.3516 95.4035C47.0626 95.1124 44.4234 92.5642 44.0172 89.2875L43.545 85.4778C43.3048 83.5409 42.2675 81.7919 40.6829 80.6524L38.3328 78.9624C35.7733 77.1219 34.7586 73.7985 35.8535 70.8422L37.2433 67.0898C37.8103 65.5589 37.8248 63.8781 37.2843 62.3376L35.7531 57.9736C34.7158 55.0175 35.7674 51.7321 38.3284 49.9278L40.6334 48.3039C42.1875 47.2089 43.2298 45.5293 43.5211 43.6506Z"
                  stroke="black"
                  stroke-width="2.67839"
                  stroke-linecap="round"
                />
                <circle cx="54.706" cy="44.5302" r="2.0603" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-8 font-raleway">
              <span className="text-xl font-bold ">Quality</span>
              <span className="text-xs pt-4">
                High-quality products and services that adhere to the strictest
                standards of excellence are what we are striving to deliver. Our
                team of qualified professionals is committed to making sure that
                our goods and services meet or exceed the expectations of our
                customers
              </span>
            </div>
          </div>
          <div className="w-[600px] h-[150px] flex justify-around items-center">
            <div>
              <svg
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="75"
                  cy="75"
                  r="75"
                  fill="#4CAF50"
                  fill-opacity="0.7"
                />
                <path
                  d="M55.0882 50.0989C52.7297 48.7512 46.6787 46.4602 41.3419 48.0774V38.9806L28 54.1419L41.3419 69.3032V61.015H47.6086V69.9097C48.1477 75.9068 52.4198 87.9415 65.1957 88.1032H70.8559M85.6129 88.1032C86.4215 88.1032 90.8688 87.2946 90.8688 82.2409V75.3677M85.6129 88.1032H94.3054C102.998 88.1032 112.095 79.6129 112.095 68.8989V57.3763M85.6129 88.1032H81.3677M85.6129 88.1032C89.9591 88.1032 91.2731 93.3591 91.2731 94.7742V99.6258M90.8688 75.3677C90.8688 74.1139 89.8921 70.3953 84.8043 67.3471M90.8688 75.3677H95.9226C97.0681 75.3677 99.3591 74.5996 99.3591 71.5269C99.3591 68.4542 99.3591 45.9885 99.3591 35.1398H90.6667L105.626 22L120.383 35.1398H112.095V51.9183M70.8559 88.1032C66.6512 88.1032 65.6 84.195 65.6 82.2409V75.772M70.8559 88.1032C68.9692 88.5749 65.1957 90.5695 65.1957 94.7742H62.7699M70.8559 88.1032H74.4946M78.1333 88.1032C75.7075 88.1032 71.8667 85.2731 71.8667 82.6452C71.8667 78.7639 71.8667 76.1763 71.8667 75.3677C73.8882 75.3677 76.7183 73.5484 78.2344 71.9312C79.6832 73.6831 81.9742 75.3677 84.8043 75.3677V82.6452C84.8043 84.8688 81.9338 88.1032 78.1333 88.1032ZM78.1333 88.1032H74.4946M78.1333 88.1032H81.3677M65.6 75.772V74.357C66.6108 69.1011 75.3032 62.4301 83.5914 66.6753C84.0196 66.8946 84.4235 67.119 84.8043 67.3471M65.6 75.772C63.9154 75.7047 60.5462 74.5187 60.5462 70.314C60.5462 66.1092 60.5462 61.015 60.5462 58.9935C60.5462 57.9828 60.1015 55.5166 58.3226 53.7376M84.8043 67.3471V46.4602H93.0925L78.2344 33.3204L63.5785 46.4602H71.6645V62.0258M58.7269 108.723C56.1394 108.723 55.4925 107.105 55.4925 106.297C55.4925 105.151 55.4925 102.052 55.4925 98.8172C55.4925 97.7746 55.6885 96.984 55.9858 96.3914M58.7269 108.723C61.3144 108.723 70.4516 108.723 74.6968 108.723V98.2107C74.7642 97.0652 74.2925 94.7742 71.8667 94.7742C69.4409 94.7742 64.7914 94.7742 62.7699 94.7742M58.7269 108.723C57.1097 108.992 53.8753 110.299 53.8753 113.372C53.8753 116.445 53.8753 116.27 53.8753 116.404M62.7699 94.7742H58.3226C57.6833 94.7742 56.6108 95.1455 55.9858 96.3914M55.9858 96.3914H45.9914V89.7204L32.8516 102.86L45.9914 115.798V109.329H75.7075M96.529 96.3914H108.658V89.114L122 102.456L108.658 115.798V109.329H95.5183M74.4946 88.1032V92.5505L77.729 94.7742L81.3677 92.9548V88.1032M75.7075 109.329C75.7075 106.701 79.3462 104.275 82.3785 104.275H84.6022V99.6258H91.2731M75.7075 109.329H91.2731M91.2731 109.329V99.6258M91.2731 109.329H95.5183M95.5183 109.329C96.5964 109.464 99.157 110.218 99.157 112.968C99.157 115.717 99.157 116 99.157 116.202"
                  stroke="black"
                  stroke-width="2.02151"
                  stroke-linecap="round"
                />
                <path
                  d="M66.9907 100.434C66.9907 101.806 65.8785 102.918 64.5064 102.918C63.1344 102.918 62.0221 101.806 62.0221 100.434C62.0221 99.0615 63.1344 97.9493 64.5064 97.9493C65.8785 97.9493 66.9907 99.0615 66.9907 100.434Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-8 font-raleway">
              <span className="text-xl font-bold ">Flexibility</span>
              <span className="text-xs pt-4">
                We understand that every client and customer has unique needs,
                which is why we offer flexible solutions that can be customized
                to meet their specific requirements
              </span>
            </div>
          </div>
          <div className="w-[600px] h-[150px] flex justify-around items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 150 150"
                fill="none"
              >
                <circle
                  cx="75"
                  cy="75"
                  r="75"
                  fill="#0CAEC1"
                  fill-opacity="0.7"
                />
                <path
                  d="M54.2442 89.7288C51.2908 91.0712 47.156 94.7959 54.2442 98.9551C63.1044 104.154 89.1834 102.666 95.1038 98.9551C100.01 95.8797 102.207 93.3168 95.1038 89.7288"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M23.6361 85.4817H24.7345M21 79.4772H22.0984M28.3225 85.4817H34.6199C34.7008 85.4817 34.7663 85.5472 34.7663 85.6281V89.0178C34.7663 89.1344 34.8958 89.2042 34.9932 89.1402L45.0533 82.5273C45.1408 82.4698 45.1414 82.3417 45.0545 82.2833L34.9944 75.5297C34.8971 75.4644 34.7663 75.5341 34.7663 75.6513V79.4772M34.7663 81.5275V79.4772M34.7663 79.4772H26.3454"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M126.151 85.4817H125.053M128.787 79.4772H127.689M121.465 85.4817H115.168C115.087 85.4817 115.021 85.5472 115.021 85.6281V89.0178C115.021 89.1344 114.892 89.2042 114.794 89.1402L104.734 82.5273C104.647 82.4698 104.646 82.3417 104.733 82.2833L114.793 75.5297C114.89 75.4644 115.021 75.5341 115.021 75.6513V79.4772M115.021 81.5275V79.4772M115.021 79.4772H123.442"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M34.3581 48.7725L35.1202 49.5634M36.8524 42.7078L37.6146 43.4987M37.61 52.147L41.9798 56.6815C42.0359 56.7398 42.0342 56.8325 41.9759 56.8886L39.5351 59.2408C39.4512 59.3216 39.4908 59.4634 39.6044 59.4891L51.3469 62.1442C51.4491 62.1673 51.5417 62.0789 51.5234 61.9758L49.4057 50.0455C49.3852 49.9301 49.2443 49.8843 49.1599 49.9656L46.405 52.6204M44.9286 54.0432L46.405 52.6204M46.405 52.6204L40.5617 46.5569"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M115.429 48.7725L114.667 49.5634M112.935 42.7078L112.173 43.4987M112.177 52.147L107.808 56.6815C107.752 56.7398 107.753 56.8325 107.812 56.8886L110.252 59.2408C110.336 59.3216 110.297 59.4634 110.183 59.4891L98.4405 62.1442C98.3384 62.1673 98.2457 62.0789 98.264 61.9758L100.382 50.0455C100.402 49.9301 100.543 49.8843 100.628 49.9656L103.382 52.6204M104.859 54.0432L103.382 52.6204M103.382 52.6204L109.226 46.5569"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M77.8691 30.705L77.8891 31.8032M71.8175 28.1788L71.8376 29.277M77.9545 35.3907L78.0692 41.687C78.0707 41.7679 78.1375 41.8322 78.2183 41.8307L81.6075 41.769C81.724 41.7668 81.7962 41.8951 81.734 41.9936L75.3055 52.1725C75.2496 52.2611 75.1215 52.264 75.0616 52.1781L68.1258 42.2428C68.0587 42.1467 68.126 42.0147 68.2432 42.0126L72.0684 41.9428M74.1184 41.9055L72.0684 41.9428M72.0684 41.9428L71.915 33.5234"
                  stroke="black"
                  stroke-width="2.0503"
                  stroke-linecap="round"
                />
                <path
                  d="M67.7176 90.6074V94.1222"
                  stroke="black"
                  stroke-width="2.19675"
                  stroke-linecap="round"
                />
                <path
                  d="M82.0698 90.6074V94.1222"
                  stroke="black"
                  stroke-width="2.19675"
                  stroke-linecap="round"
                />
                <path
                  d="M68.3035 81.4543C65.9602 82.1134 63.0119 84.0172 61.4935 86.6533C60.3371 88.6609 60.3951 89.6556 60.3951 94.2687"
                  stroke="black"
                  stroke-width="1.61095"
                  stroke-linecap="round"
                />
                <path
                  d="M81.4839 81.4543C83.8272 82.1134 86.7755 84.0172 88.294 86.6533C89.4503 88.6609 89.3924 89.6556 89.3924 94.2687"
                  stroke="black"
                  stroke-width="1.61095"
                  stroke-linecap="round"
                />
                <circle
                  cx="74.8205"
                  cy="69.5186"
                  r="9.95862"
                  stroke="black"
                  stroke-width="2.19675"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-start items-start w-full p-8 font-raleway">
              <span className="text-xl font-bold ">Customer Focus</span>
              <span className="text-xs pt-4">
                We are committed to putting our customers first. We work closely
                with our clients to understand their needs and provide them with
                the support and resources they need to succeed.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-lg m-4">
        <span className="text-4xl font-raleway font-bold">
          Meet Our <span className="text-pred">Team</span>
        </span>
        <div className="p-4 pt-16">
          <MemberList members={members} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

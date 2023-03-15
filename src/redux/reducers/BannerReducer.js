import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  data: [
    {
      maBanner: 1,
      img: 'https://img1.wsimg.com/isteam/ip/d6a3e7a7-e920-4711-bf09-856dd846af78/avengers-endgame-banner.jpg',
      link: "https://www.youtube.com/watch?v=4sZj4aeYUCA",
    },

    {
      maBanner: 2,
      img: "https://www.venuscinema.vn/uploaded/slideshow/banner-nguoi-kien-rap-phim-venuscinema.jpg",
      link: "https://www.youtube.com/watch?v=RhsV6wdeR3Y",

    },

    {
      maBanner: 3,
      img: "https://images2.thanhnien.vn/528068263637045248/2023/2/11/ovffxtrlathumbnailffxhd-16760785682151893462097.jpg",
      link: "https://www.youtube.com/watch?v=32RAq6JzY-w",
    },
  ],
  modalData: ''
}

const BannerReducer = createSlice ({
  name: 'BannerReducer',
  initialState,
  reducers: {
    getBannerMovie: (state, {type, payload}) => {
      return {...state}
    },
    getModalVideo: (state, {type, payload}) => {
const videoId = getId(payload)
return {...state, modalData: videoId}
    }
  }
});

export const {getBannerMovie, getModalVideo} = BannerReducer.actions
export default BannerReducer.reducer

function getId (url) {
  const regExp= /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
  ? match[2]
  : null;
}


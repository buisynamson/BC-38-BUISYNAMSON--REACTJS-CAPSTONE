import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { getBannerMovie, getModalVideo } from '../../redux/reducers/BannerReducer'
import { Carousel, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay } from '@fortawesome/free-solid-svg-icons'


export default function HomeCarousel() {

const dataBanner = useSelector(state => state.BannerReducer.data)
let dataVideoModal = useSelector(state=> state.BannerReducer.modalData)
const dispatch = useDispatch()
const [isModalOpen, setIsModalOpen] = useState(false)

const showModal = (link) => {
  dispatch(getModalVideo(link))
  setIsModalOpen(true);
};

const handleCancel = () => {
  setIsModalOpen(false);
}

useEffect(()=> {
dispatch(getBannerMovie())
},[])

  return (
    <div className='carousel hidden sm:block' style={{height: 900}}>
      <Carousel effect="fade" autoplay='true'>
      {dataBanner.map((item, index)=>{
        return <div key={index}>
          <img src={item.img} alt={item.img} className='img-carousel w-full' style={{height: 900, objectPosition:'top', objectFit: 'cover'}} />
          <button onClick={()=> showModal(item.link)}>
          <FontAwesomeIcon className='w-8 h-8 md:w-11 md:h-11 mr-3 text-green-600' icon= {faPlay}/>
          </button>
          
          {isModalOpen ? <Modal
          footer={null}
          centered
          closable={false}
          open={isModalOpen}
          onCancel={handleCancel}>
            <iframe id='videoId' className="w-full h-full rounded-xl" src={`https://www.youtube.com/embed/${dataVideoModal}`} allowFullScreen></iframe>
          </Modal> : ''}
        </div>
      })}
      </Carousel>
    </div>
  )
}

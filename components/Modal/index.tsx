
import { useState} from 'react'
import Modal from "react-modal"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

export default function ModalVideo(){
    return(
        <>
            <button>
              <FontAwesomeIcon icon={faCirclePlay} beat  className='text-[#dc1a83] text-[50px] absolute bottom-[55%] left-[23%] lg:left-[44%] bg-slate-950 rounded-full' />
            </button>
        </>
    )
}
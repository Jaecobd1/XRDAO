import {timelineElements} from "./timelineElements"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion'
import Link from 'next/link'
function Phase1() {
    return (
        <VerticalTimeline>
            {
                timelineElements.map(element => {
                    
                    return (
                        <VerticalTimelineElement
                            className="text-white z-20"
                            key={element.id}
                            date={element.date}
                            
                        >
                            <div className="text-grey">
                            <div className="flex space-x-5">
                                <h1 className="text-4xl md:text-6xl">{element.title}</h1>
                                <p>{ element.release}</p>
                                </div>
                                <p>{element.description}</p>
                                </div>

                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
)
};


function Timeline() {
    return (
        <>
        <div className="w-screen text-grey bg-gradient-to-b from-grey to-secondary via-black">
            <div>
                <h1 className="relative w-screen text-center text-white p-5 underline">Road Map</h1>
                <Phase1 />
            </div>
           
            <div className="flex flex-col justify-center">
           
                <h1 className="text-center text-white p-5 underline">Read our White Paper for more information</h1>
                <br />
                <div className="flex justify-center items-center">
           
                <motion.button whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }} className="buttonP">
                        <Link href="Road_Map">
                            <div className="text-center">
                        <p>White Paper</p>
                        </div>
                        </Link>
                    </motion.button>
                </div>
                <br/>
            </div>
            
        </div>
        <div className="bg-gradient-to-b h-20 from-secondary to-grey ">
                <br/>
            </div>
        </>
    )
}



export default Timeline

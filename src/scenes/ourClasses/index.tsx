import { SelectedPage, ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from '@/shared/HText';
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "In weight training classes, participants are typically led through a series of exercises that target different muscle groups in the body, such as the chest, back, arms, and legs. The instructor of the class will provide guidance on proper form and technique, helping participants perform the exercises safely and effectively.",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Yoga classes are typically group fitness sessions focused on various yoga practices that combine physical postures, breathing techniques, and meditation or relaxation. These classes are designed to promote overall physical health, mental well-being, and spiritual growth.",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "",
        image: image3,
    },
    {
        name: "Adventure Classes",
        description: "Adventure classes in a gym are typically group fitness sessions that simulate outdoor adventure activities like rock climbing, obstacle courses, and adventure racing in a controlled indoor environment. These classes are designed to provide a fun and challenging workout experience while incorporating elements of adventure and excitement.",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Fitness classes in a gym are typically group fitness sessions that incorporate a variety of exercises and training techniques to improve overall fitness levels. These classes can range from high-intensity cardio workouts to strength training sessions, and may incorporate equipment like weights, resistance bands, and cardio machines.",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "",
        image: image6,
    }

]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div 
            className=''
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once : true, amount: 0.5 }}
                transition={{ duration : 0.5 }}
                variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                    Our classes include traditional offerings like cardio, strength training, 
                    and yoga, as well as more specialized classes like Pilates, Zumba, kickboxing, dance, cycling, and more. 
                    Additionally, the gyms offer classes designed for specific demographics such as seniors, women-only 
                    classes, and classes for children.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className='w-[2800px] whitespace-nowrap '>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses
import appointment_img from './appointment_image.avif'
import header_img from './header_image.jpg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.avif'
import about_image from './about_image.jpg'
import logo from './logo.jpg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import tech1 from './teacher_1.avif'
import tech2 from './teacher_2.jpg'
import tech3 from './teacher_3.avif'
import tech4 from './teacher_4.avif'
import tech5 from './teacher_5.avif'
import tech6 from './teacher_6.jpg'
import tech7 from './teacher_7.jpg'
import tech8 from './teacher_8.avif'
import tech10 from './teacher_10.avif'
import tech11 from './teacher_11.jpg'
import tech12 from './teacher_12.jpg'
import tech13 from './teacher_13.jpg'
import tech14 from './teacher_14.avif'
import tech15 from './teacher_15.avif'
import tech16 from './teacher_16.avif'
import tech17 from './teacher_17.avif'
import tech18 from './teacher_18.avif'
import tech19 from './teacher_19.jpg'
import tech20 from './teacher_20.avif'
import maths from './maths.jpg'
import physics from './physics.jpg'
import quran from './quran.jpeg'
import terbia from './terbia.jpeg'
import logic from './logic.jpg'
import english from './english.jpg'
import chemistry from './chemistry.jpg'
import biology from './biology.png'
import hide from './hide.png'
import show from './show.png'



export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,show,hide
}

export const subjectData = [
    {
        speciality: 'Chemistry', //
        image: chemistry
    },
    {
        speciality: 'Biology', //
        image: biology
    },
    {
        speciality: 'English', //
        image: english
    },
    {
        speciality: 'Logic',
        image: logic
        
    },
    {
        speciality: 'Terbia',
        image: terbia
    },
    {
        speciality: 'Mathematics', 
        image: maths
    },
    {
        speciality: 'Physics', //
        image: physics
    },
    {
        speciality: "Quran",
        image: quran
    },
]

export const lecturers = [
    {
        _id: 'tech1',
        name: 'Mrs. Amira Muhamed', 
        image: tech1,
        subject: 'Chemistry',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Amira is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech3',
        name: 'Mr. Kamil Muhammed', 
        image: tech3,
        subject: 'English',
        degree: 'MBBS',
        experience: '5 Years',
        about: ' Mrs Kamil is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, BDR',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech2',
        name: 'Mrs. Hanan Muhamed', 
        image: tech2,
        subject: 'Biology',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Hanan is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech4',
        name: 'Mr. Misbah Muhamed', 
        image: tech4,
        subject: 'Mathematics',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Misbah is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech19',
        name: 'Mrs. Firdews Muhamed', 
        image: tech19,
        subject: 'Mathematics',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Firdews is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech5',
        name: 'Mr. Mahi Muhamed', 
        image: tech5,
        subject: 'Terbia',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Mahi is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech17',
        name: 'Mr. Shemsedin Muhamed', 
        image: tech17,
        subject: 'Logic',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Mahi is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech6',
        name: 'Mrs. Kamila Muhammed', 
        image: tech6,
        subject: 'Enlish',
        degree: 'MBBS',
        experience: '2 Years',
        about: ' Mrs Kamila is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, BDR',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech7',
        name: 'Mrs. Haniya Muhamed', 
        image: tech7,
        subject: 'Biology',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Haniya is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech8',
        name: 'Mr. Mesud Muhammed',
        image: tech8,
        subject: 'Physics',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr.Mesud has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tech10',
        name: 'Us. Mahir Muhamed', 
        image: tech10,
        subject: 'Quran',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Mahir is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech20',
        name: 'Us. Yaqut Muhamed', 
        image: tech20,
        subject: 'Quran',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Us. Yaqut  is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech11',
        name: 'Mrs. Hajera Muhamed', 
        image: tech11,
        subject: 'Biology',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Ha isjera one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech12',
        name: 'Mrs. Rihana Muhammed', 
        image: tech12,
        subject: 'Enlish',
        degree: 'MBBS',
        experience: '2 Years',
        about: ' Mrs Rihana is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, BDR',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech13',
        name: 'Mrs. Nadiya Muhamed', 
        image: tech13,
        subject: 'Chemistry',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Nadiya is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech14',
        name: 'Mrs. Zikra Muhamed', 
        image: tech14,
        subject: 'Chemistry',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Zikra is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech18',
        name: 'Mrs. Rahma Muhamed', 
        image: tech18,
        subject: 'Terbia',
        degree: 'MBBS',
        experience: '4 Years',
        about: ' Mrs Rahma is one of the genius tutor giving person in our company. She has many skills ranging from good communication skill to highly practical knowledge',
        fees: 50,
        address: {
            line1: '17th Cross, Chagni',
            line2: 'Circle, Ring Road, Addis Ababa'
        }
    },
    {
        _id: 'tech15',
        name: 'Mr. Fewzan Muhammed',
        image: tech15,
        subject: 'Physics',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Fewzan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'tech16',
        name: 'Mr. Hamza Muhammed',
        image: tech16,
        subject: 'Physics',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Hamza has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]
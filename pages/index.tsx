import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bigtext from "@/components/bigtext";
import Registration from "@/components/registration";
import AboutAif from "@/components/about-aif";
import Partners from "@/components/partners";
import ForumTopics from "@/components/forum-topics";
import News from "@/components/news";
import CongressCenter from "@/components/congress-center";
import Wrapper from "@/components/wrapper";
import Participants from "@/components/participants";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <Wrapper>
            <Bigtext/>
            <Registration/>
            <AboutAif/>
            <Participants/>
            <Partners/>
            <ForumTopics/>
            <News/>
            <CongressCenter/>
        </Wrapper>
    </div>
  )
}

import { motion } from 'framer-motion';

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900">
        Construa sites modernos com agilidade sem sair do HTML.
      </h1>

      <div className="grid w-full grid-cols-1 grid-rows-3">
        <div className="relative">
          <motion.img src="/img/nextjs.svg" />
        </div>
      </div>
    </Layout>
  )
}

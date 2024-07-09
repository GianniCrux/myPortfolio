export default function AboutMe() { //TODO: Change the layout of headings and add images
    return (
        <section id="about" className="py-16 bg-white text-black dark:bg-black dark:text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 flex">
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-right">ABOUT</h2>
                    <p>
                    Here you can write a paragraph about yourself. For example: I&aposm a passionate web developer with a keen interest in creating user-friendly and visually appealing websites. With expertise in React, Next.js, and modern web technologies, I strive to build efficient and scalable applications that make a positive impact.
                    </p>
                </div>
                <div className="w-[2px] bg-green-500 mx-1"></div>
                <div className="w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4 text-left">ME</h2>
                    <div className="bg-gray-300 h-64 w-full">
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, tenetur. Assumenda expedita sed unde rem, porro est inventore praesentium eius.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
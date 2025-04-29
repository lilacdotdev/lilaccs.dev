import { Element } from "react-scroll";

export default function Links (){
    return (
        <Element name="Links" className="relative">
            <section className="bg-stone-300 text-black">
                <div className="mx-10 py-10 flex gap-10 justify-center content-center">
                    <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[url(/pfp.jpg)] bg-cover bg-center rounded-full border-4"></div>
                    <div className="flex-col content-center justify-center">
                        <h2 className="text-semilg">Get In Touch</h2>
                        <p>(Or just see my work!)</p>
                        <ul className="list-disc list-inside">
                            <li>Email: <a href="mailto:talk@lilaccs.dev">talk@lilaccs.dev</a></li>
                            <li>Youtube: <a href="https://www.youtube.com/@lilaccsdev">@lilaccsdev</a></li>
                            <li>Github: <a href="https://github.com/lilacdotdev">@lilacdotdev</a></li>
                            <li>Discord: <a href="https://discord.gg/srVDCHrDHS">@lilacdotdev</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </Element>
    );
};
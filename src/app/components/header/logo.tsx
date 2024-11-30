import Image from "next/image";
export default function Logo() {
    return (
        <div className=" ">
            <Image
            className="bg-transparent"
            src="/images/logo.png"
            alt="shop.co logo"
            width={150}
            height={42}
            />
        </div>
    );
}
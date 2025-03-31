import Image, { type StaticImageData } from "next/image";
import BulletPoint from "../../assets/career/bulletpoint.svg";

interface BulletItemProps {
  children: React.ReactNode;
}

export default function BulletItem({ children }: BulletItemProps) {
  return (
    <div className="flex items-start gap-[8px]">
      <Image src={BulletPoint as StaticImageData} alt="bullet point" />
      <p className="text-[16px] text-left">{children}</p>
    </div>
  );
}

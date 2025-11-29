import Image from "next/image";

export function MenuItem({
  name,
  imageUrl,
  handleClick,
}: {
  name: string;
  imageUrl?: string;
  handleClick?: () => void;
}) {
  return (
    <div
      className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-[#ff1100]" />
      {imageUrl && (
        <div className="absolute inset-0 scale-110">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover opacity-100" // blur-[3px]
          />
        </div>
      )}
      <h3 className="absolute inset-0 flex items-center justify-center text-[28px] xs:text-[24px] md:text-[24px] lg:text-[28px] xl:text-[24px] font-bold text-white uppercase text-center leading-tight z-10 px-4">
        {name}
      </h3>
    </div>
  );
}

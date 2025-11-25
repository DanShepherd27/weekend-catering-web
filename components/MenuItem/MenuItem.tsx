import Image from "next/image";

export function MenuItem({
  name,
  imageUrl,
}: {
  name: string;
  imageUrl?: string;
}) {
  return (
    <div className="relative h-[200px] md:h-[300px] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-[#ff1100]" />
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover blur-[5px] opacity-90"
        />
      )}
      <h3 className="absolute inset-0 flex items-center justify-center text-[28px] md:text-[36px] font-bold text-white uppercase text-center leading-tight z-10 px-4">
        {name}
      </h3>
    </div>
  );
}

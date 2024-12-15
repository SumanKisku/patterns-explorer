import Image from "next/image";
import Link from "next/link";

interface PatternCardProps {
  id: number;
  name: string;
  imageUrl: string;
}

const PatternCard: React.FC<PatternCardProps> = ({ id, name, imageUrl }) => {
  return (
    <Link href={`/pattern/${id}`}>
      <div className="block border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 p-4 text-center">
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className="mx-auto rounded-lg"
        />
        <h2 className="mt-4 text-lg font-semibold">{name}</h2>
      </div>
    </Link>
  );
};

export default PatternCard;
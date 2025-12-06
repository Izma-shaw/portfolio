import Link from "next/link";
import { media } from "@/lib/utils";
import Icon from "./Icon";

const SocialMediaLinks = ({ size }) => {
  return (
    <div className="mb-2 flex flex-wrap gap-3 max-[310px]:flex-wrap sm:gap-5">
      {media.map(
        (item) =>
          item.show && (
            <Icon key={item.name}>
              <Link
                href={item.url}
                target="_blank"
                aria-label={item.name}
                rel="noreferrer"
              >
                {item.icon}
              </Link>
            </Icon>
          ),
      )}
    </div>
  );
};

export default SocialMediaLinks;

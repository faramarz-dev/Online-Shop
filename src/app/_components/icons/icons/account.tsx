import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path opacity=".4" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"/><path d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"/>
    </BaseIcon>
  );
}
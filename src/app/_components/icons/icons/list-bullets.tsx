import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path d="M11 8H27" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 16H27" strokeLinecap="round" strokeLinejoin="round"/><path d="M11 24H27" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.5 9.5C6.32843 9.5 7 8.82843 7 8C7 7.17157 6.32843 6.5 5.5 6.5C4.67157 6.5 4 7.17157 4 8C4 8.82843 4.67157 9.5 5.5 9.5Z"/><path d="M5.5 17.5C6.32843 17.5 7 16.8284 7 16C7 15.1716 6.32843 14.5 5.5 14.5C4.67157 14.5 4 15.1716 4 16C4 16.8284 4.67157 17.5 5.5 17.5Z"/><path d="M5.5 25.5C6.32843 25.5 7 24.8284 7 24C7 23.1716 6.32843 22.5 5.5 22.5C4.67157 22.5 4 23.1716 4 24C4 24.8284 4.67157 25.5 5.5 25.5Z"/>
    </BaseIcon>
  );
}
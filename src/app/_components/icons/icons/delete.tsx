import {BaseIcon} from "../base-icon";
import { SVGAttributes } from "react";

 export default function SvgIcon(props:SVGAttributes<SVGSVGElement>) {
  return (
    <BaseIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 3.75H16.25V5H15V16.25L13.75 17.5H5L3.75 16.25V5H2.5V3.75H6.25V2.5C6.25 2.16848 6.3817 1.85054 6.61612 1.61612C6.85054 1.3817 7.16848 1.25 7.5 1.25H11.25C11.5815 1.25 11.8995 1.3817 12.1339 1.61612C12.3683 1.85054 12.5 2.16848 12.5 2.5V3.75ZM11.25 2.5H7.5V3.75H11.25V2.5ZM5 16.25H13.75V5H5V16.25ZM7.5 6.25H6.25V15H7.5V6.25ZM8.75 6.25H10V15H8.75V6.25ZM11.25 6.25H12.5V15H11.25V6.25Z"/>
    </BaseIcon>
  );
}
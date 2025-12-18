import { IoLogOut } from "react-icons/io5";
import { Button } from "./Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { logout } from "../../../services/authService";
import { FiAlertTriangle } from "react-icons/fi";

export function LogoutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-[#CC5F5F] flex items-center justify-center text-[0px] lg:flex lg:items-center lg:justify-start lg:gap-2  lg:text-[14px] lg:font-[Inter] lg:font-normal p-2 lg:px-4 lg:py-[17px] rounded-xl lg:min-w-[180px]">
          <IoLogOut className="text-[#CC5F5F] size-3 ml-2 lg:ml-0" />
          Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] flex flex-col justify-center h-[200px]! bg-white">
        <DialogHeader>
          <FiAlertTriangle className="mx-auto size-10 text-[#cc5f5f]" />
          <DialogTitle className="text-center text-3xl">
            Are You Sure
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex flex-row justify-center!">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className="bg-[#cc5f5f] text-white" onClick={() => logout()}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

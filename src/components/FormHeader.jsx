import { Logo } from "./Logo";

export const FormHeader = ({titleText}) => (
  <div className="flex justify-center items-center flex-col">
    <Logo marginTop='mt-[180px]' />
    <h1 className="mt-20 font-bold text-3xl text-center">{titleText}</h1>
  </div>
)
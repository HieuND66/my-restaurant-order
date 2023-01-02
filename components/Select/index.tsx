import clsx from "clsx";
import { FC, useId } from "react";
import ReactSelect, { Props, components } from "react-select";

import { VscCheck } from "react-icons/vsc";

interface IProps extends Props {
  title?: string;
  isGroup?: boolean;
  placeholder?: string;
  className?: string;
  error?: string;
  circle?: boolean;
  modal?: boolean;
}

const Select: FC<IProps> = ({
  title,
  isGroup,
  placeholder = "",
  className = "",
  error,
  circle,
  modal = false,
  ...props
}) => {
  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="text-[13px] text-[#5B5F7B] mb-2 font-semibold">
          {title}
        </div>
      )}
      <ReactSelect
        instanceId={useId()}
        className="absolute top-0 left-0 w-[95%] basic-single"
        classNamePrefix="select"
        menuPlacement="auto"
        name="color"
        components={{
          GroupHeading: (props) => (
            <components.GroupHeading
              {...props}
              style={{ color: "black", fontWeight: "bold" }}
            />
          ),
          Option: (props) => (
            <div
              {...props.innerProps}
              className="flex items-center justify-between px-4 py-1 cursor-pointer hover:bg-neutral-200"
            >
              <span className={clsx({ "text-sm pl-2": isGroup })}>
                {/* @ts-ignore */}
                {props.data.label}
              </span>
              {props.isSelected && <VscCheck />}
            </div>
          ),
        }}
        styles={{
          control: (base, state) => ({
            ...base,
            boxShadow: "none",
            borderColor: error
              ? "rgb(239 68 68)"
              : state.isFocused
              ? "black"
              : modal
              ? "#E4E6EE"
              : "#575C76",
            "&:hover": {
              borderColor: error
                ? "rgb(239 68 68)"
                : modal
                ? "#E4E6EE"
                : "black",
            },
            paddingLeft: circle ? "8px" : "0px",
            height: "28px",
            minHeight: modal ? "32px" : "29px",
            paddingRight: circle ? "8px" : "0px",
            borderRadius: circle ? "100px" : "4px",
            backgroundColor: circle ? " #F7F7F7" : "translate",
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: circle ? "4px 4px 4px 0px" : "4px",
          }),
        }}
        placeholder={placeholder}
        {...props}
      />
      {!!error && <div className="mt-1 text-sm text-red-500">{error}</div>}
    </div>
  );
};

export default Select;

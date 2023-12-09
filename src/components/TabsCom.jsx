import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import useLanguage from "./useLanguage";
import { CgProfile } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsCom() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // switching the language
  const { t, handleChangeLanguage } = useLanguage();

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ border: 1, borderColor: "divider", borderRadius: 10 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={t("main.secondPart.firstButton")} {...a11yProps(0)} />
            <Tab label={t("main.secondPart.secondButton")} {...a11yProps(1)} />
            <Tab label={t("main.secondPart.thirdButton")} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel
          value={value}
          index={0}
          width={100}
          className="h-[460px]"
        >
          {t("main.secondPart.paragraph")}

          <div className="grid grid-cols-2 gap-2">
            <div className="bg-green-500 p-4 text-white font-bold text-center flex flex-row justify-center items-center">
              <div className="w-full flex items-center gap-2">
                <CgProfile color="#F66C59" className="mr-2" />
                <span className="w-full flex justify-start">Mohamad Ganji</span>
              </div>
            </div>
            <div className="bg-green-500 p-4 text-white font-bold text-center flex flex-row">
              <div className="flex items-center justify-around">
                <BiPhoneCall color="#F66C59" className="mr-2" />
                <span className="w-full">+989196273474</span>
              </div>
            </div>
            <div className="bg-yellow-500 p-4 text-white font-bold text-center">
              <div className="w-full flex items-center gap-2">
                <IoMail color="#F66C59" className="mr-2" />

                <span className="w-full flex justify-start">
                  Mohamad.ganjif@gmail.com
                </span>
              </div>
            </div>
            <div className="bg-green-500 p-4 text-white font-bold text-center flex flex-row">
              <div className="flex items-center justify-around">
                <CiCalendar color="#F66C59" className="mr-2" />
                <span className="w-full"> {t("main.secondPart.calender")}</span>
              </div>
            </div>
          </div>
          <span className="text-mainOrange mt-3">
            {t("main.secondPart.skills")}
          </span>
          <div className="border-t-2 border-gray w-11/12 mt-3 mb-3"></div>
          <span className="">{t("main.secondPart.language")}</span>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="h-[460px]">
          <div className="flex items-start justify-start flex-col">
            <p className="text-2xl font-semibold">
              {t("main.secondPart.journey")}
            </p>
            <div className="grid grid-cols-2 gap-2 w-full mt-3 mb-[100px]">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="flex items-center mb-3">
                    <MdOutlineWorkOutline
                      color="#F66C59"
                      className="mr-2 flex"
                    />
                    <p className="text-mainOrange">
                      {t("main.secondPart.exprience")}
                    </p>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-mainOrange hover:translate-y-24 duration-500"></div>
                  <div className="border-r-2 border-gray-500 h-24 w-0 border-gray ml-[10px]">
                    <p className="w-[248px] ml-3  flex gap-2 flex-col">
                      {t("main.secondPart.secondInfoWork")} <br />
                      <p className="text-mainOrange flex gap-2 mt-7">
                        <TbCalendarTime color="#F66C59" className="" />
                        {t("main.secondPart.secondDateWork")}{" "}
                      </p>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mt-10">
                  <div className="w-5 h-5 rounded-full bg-mainOrange hover:translate-y-24 duration-500"></div>
                  <div className="border-r-2 border-gray-500 h-24 w-0 border-gray ml-[10px]">
                    <p className="w-[248px] ml-3  flex gap-2 flex-col">
                      {t("main.secondPart.firstInfoWork")} <br />
                      <p className="text-mainOrange flex gap-2 mt-7">
                        <TbCalendarTime color="#F66C59" className="" />
                        {t("main.secondPart.firstDateWork")}{" "}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col">
                <div className="flex items-center">
                  <MdOutlineSchool
                    color="#F66C59"
                    className="mr-2 flex items-center"
                  />
                  <p className="text-mainOrange">
                    {t("main.secondPart.education")}
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full bg-mainOrange hover:translate-y-24 duration-500 mt-3"></div>
                <div className="border-r-2 border-gray-500 h-24 w-0 border-gray ml-[10px]">
                  <p className="w-[248px] ml-3  flex gap-2 flex-col">
                    {t("main.secondPart.secondInfoEducation")} <br />
                    <p className="text-mainOrange flex gap-2 mt-14">
                      <TbCalendarTime color="#F66C59" className="" />
                      {t("main.secondPart.secondDateEducation")}{" "}
                    </p>
                  </p>
                </div>
                <div className="w-5 h-5 rounded-full bg-mainOrange hover:translate-y-24 duration-500 mt-12"></div>
                <div className="border-r-2 border-gray-500 h-24 w-0 border-gray ml-[10px]">
                  <p className="w-[248px] ml-3  flex gap-2 flex-col">
                    {t("main.secondPart.firstInfoEducation")} <br />
                    {t("main.secondPart.firstInfoEducation2")}
                    <p className="text-mainOrange flex gap-2 mt-7">
                      <TbCalendarTime color="#F66C59" className="" />
                      {t("main.secondPart.firstDateEducation")}{" "}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="h-[460px]">
          <p className="text-2xl font-semibold">{t("main.secondPart.tools")}</p>
          <p className="text-xl font-semibold mt-10">
            {t("main.secondPart.skill")}
          </p>
          <div className="border-t-2 border-gray w-11/12 mt-3 mb-3"></div>
          <p>JavaScript</p>
          <p>Html & Css</p>
          <p>React</p>
          <p>Tailwind</p>
          <p>Bootstrap</p>
          <p>Mui</p>
          <p>Redux</p>
          <p>Next</p>
          <p>Hardworking</p>
          <p>Teamwork</p>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

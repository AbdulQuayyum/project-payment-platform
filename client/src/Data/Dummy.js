import React from "react";
import { HiSpeakerWave } from "react-icons/hi2"
import { FaRegUser } from "react-icons/fa"
import { TbSettings } from "react-icons/tb";

export const NotficationData = [
    {
        image: HiSpeakerWave,
        message: "Payment Platform",
        desc: "You joined our Payment Platform",
        time: "9:08 AM",
    },
    {
        image: HiSpeakerWave,
        message: "Credit Alert",
        desc: "You just received a credit of $123 from blah blah blah",
        time: "11:56 AM",
    },
    {
        image: HiSpeakerWave,
        message: "Debit Alert",
        desc: "You just received a debit for sending @123 to blah blah blah",
        time: "4:39 AM",
    }
];

export const UserProfileData = [
    {
        icon: FaRegUser,
        title: "My Profile",
        iconColor: "#aaa",
        iconBg: "#e5e7eb",
    },
    {
        icon: TbSettings,
        title: "Settings",
        iconColor: "#aaa",
        iconBg: "#e5e7eb",
    },
];
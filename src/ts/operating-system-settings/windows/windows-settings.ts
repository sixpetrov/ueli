import { WindowsSetting } from "./windows-setting";
import { WindowsSettingsHelpers } from "../../helpers/windows-settings-helpers";
import { SearchResultItem } from "../../search-result-item";

const personalizationModuleTitle = "Personalization";
const easeOfAccesModuleTitle = "Ease of Access";
const privacyModuleTitle = "Privacy";
const cortanaModuleTitle = "Cortana";

export const windowsGeneralSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:`,
        name: "Windows Settings",
        tags: ["control", "panel", "options"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:batterysaver`,
        name: "Battery",
        tags: ["power", "energy"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:display`,
        name: "Display",
        tags: ["screen", "monitor"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:notifications`,
        name: "Notifications & actions",
        tags: ["notify"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:powersleep`,
        name: "Power & sleep",
        tags: ["energy"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:storagesense`,
        name: "Storage",
        tags: ["disk"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:tabletmode`,
        name: "Tablet mode",
        tags: ["mobile", "touch"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:project`,
        name: "Projecting to this PC",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:multitasking`,
        name: "Multitasking",
        tags: [""],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:remotedesktop`,
        name: "Remote Desktop",
        tags: ["connection"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:about`,
        name: "About your PC",
        tags: ["system", "device", "specifications", "information"],
    },
];

export const windowsDeviceSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:bluetooth`,
        name: "Bluetooth",
        tags: ["wireless", "devices"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:printers`,
        name: "Printers & Scanners",
        tags: ["devices"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:mousetouchpad`,
        name: "Touchpad",
        tags: ["input"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:typing`,
        name: "Typing",
        tags: ["input", "keyboard"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:pen`,
        name: "Pen & Windows Ink",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:autoplay`,
        name: "Autoplay",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:usb`,
        name: "USB",
        tags: ["devices"],
    },
];

export const windowsNetworkSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network`,
        name: "Network status",
        tags: ["internet"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-ethernet`,
        name: "Ethernet",
        tags: ["network", "internet"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-wifi`,
        name: "Wi-Fi",
        tags: ["network", "internet", "wireless", "wlan"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-dialup`,
        name: "Dial-up",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-vpn`,
        name: "VPN",
        tags: ["virtual", "network"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-airplanemode`,
        name: "Airplane mode",
        tags: ["offline"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-mobilehotspot`,
        name: "Mobile hotspot",
        tags: ["network", "internet"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:datausage`,
        name: "Data Usage",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:network-proxy`,
        name: "Proxy",
        tags: ["network"],
    },
];

export const windowsPersonalizationSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:personalization-background`,
        name: `${personalizationModuleTitle}: Background`,
        tags: ["customization", "colors", "images", "pictures", "wallpapers"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:colors`,
        name: `${personalizationModuleTitle}: Colors`,
        tags: ["color", "customization", "creative"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:lockscreen`,
        name: `${personalizationModuleTitle}: Lock screen`,
        tags: ["screen", "saver"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:themes`,
        name: `${personalizationModuleTitle}: Themes`,
        tags: ["customization", "colors", "images", "pictures"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:personalization-start`,
        name: `${personalizationModuleTitle}: Start`,
        tags: ["customization", "search"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:taskbar`,
        name: `${personalizationModuleTitle}: Taskbar`,
        tags: [],
    },
];

export const windowsAppSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:appsfeatures`,
        name: "Apps & features",
        tags: ["programs", "uninstall"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:defaultapps`,
        name: "Default apps",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:optionalfeatures`,
        name: "Optional features",
        tags: ["additional"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:maps`,
        name: "Offline maps",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:appsforwebsites`,
        name: "Apps for websites",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:videoplayback`,
        name: "Video playback",
        tags: [],
    },
];

export const windowsAccountSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:yourinfo`,
        name: "Your info",
        tags: ["account", "user", "about"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:emailandaccounts`,
        name: "Email & app accounts",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:signinoptions`,
        name: "Sign-in options",
        tags: ["password", "change", "security", "secret", "account", "pin"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:workplace`,
        name: "Access work or school",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:otherusers`,
        name: "Family & other users",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:sync`,
        name: "Sync your settings",
        tags: [],
    },
];

export const windowsTimeAndLanguageSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:dateandtime`,
        name: "Date & Time",
        tags: ["clock"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:regionlanguage`,
        name: "Region & language",
        tags: ["locale"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:speech`,
        name: "Speech",
        tags: [],
    },
];

export const windowsGetGamingSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-broadcasting`,
        name: "Broadcasting",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-gamebar`,
        name: "Game bar",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-gamedvr`,
        name: "Game DVR",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-gamemode`,
        name: "Game Mode",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-trueplay`,
        name: "TruePlay",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:gaming-xboxnetworking`,
        name: "Xbox Networking",
        tags: [],
    },
];

export const windowsEaseOfAccessSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-narrator`,
        name: `${easeOfAccesModuleTitle}: Narrator`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-magnifier`,
        name: `${easeOfAccesModuleTitle}: Magnifier`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-highcontrast`,
        name: `${easeOfAccesModuleTitle}: Color & high Contrast`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-closedcaptioning`,
        name: `${easeOfAccesModuleTitle}: Closed Captioning`,
        tags: ["cc"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-keyboard`,
        name: `${easeOfAccesModuleTitle}: Keyboard`,
        tags: ["input"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-mouse`,
        name: `${easeOfAccesModuleTitle}: Mouse`,
        tags: ["input"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:easeofaccess-otheroptions`,
        name: `${easeOfAccesModuleTitle}: Other Options`,
        tags: [],
    },
];

export const windowsPrivacySettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-general`,
        name: `${privacyModuleTitle}: General`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-location`,
        name: `${privacyModuleTitle}: Location`,
        tags: ["gps"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-webcam`,
        name: `${privacyModuleTitle}: Camera`,
        tags: ["webcam"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-microphone`,
        name: `${privacyModuleTitle}: Microphone`,
        tags: ["audio", "input"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-notifications`,
        name: `${privacyModuleTitle}: Notifications`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-speechtyping`,
        name: `${privacyModuleTitle}: Speech, ing, & typing`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-accountinfo`,
        name: `${privacyModuleTitle}: Account info`,
        tags: ["personal", "user"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-contacts`,
        name: `${privacyModuleTitle}: Contacts`,
        tags: ["people"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-calendar`,
        name: `${privacyModuleTitle}: Calendar`,
        tags: ["day", "month", "year"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-callhistory`,
        name: `${privacyModuleTitle}: Call history`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-email`,
        name: `${privacyModuleTitle}: Email`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-tasks`,
        name: `${privacyModuleTitle}: Tasks`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-messaging`,
        name: `${privacyModuleTitle}: Messaging`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-radios`,
        name: `${privacyModuleTitle}: Radios`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-customdevices`,
        name: `${privacyModuleTitle}: Other Devices`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-feedback`,
        name: `${privacyModuleTitle}: Feedback & diagnostics`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-backgroundapps`,
        name: `${privacyModuleTitle}: Background apps`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-appdiagnostics`,
        name: `${privacyModuleTitle}: App diagnostics`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:automaticfiledownloads`,
        name: `${privacyModuleTitle}: Automatic file downloads`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:privacy-motion`,
        name: `${privacyModuleTitle}: Motion`,
        tags: [],
    },
];

export const windowsUpdateAndSecuritySettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:windowsupdate`,
        name: "Windows Update",
        tags: ["patch", "upgrade", "security"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:windowsdefender`,
        name: "Windows Defender",
        tags: ["antivirus", "protection", "security", "scan", "malware"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:backup`,
        name: "Backup",
        tags: ["files", "storage"],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:troubleshoot`,
        name: "Troubleshoot",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:recovery`,
        name: "Recovery",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:activation`,
        name: "Activation",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:findmydevice`,
        name: "Find my device",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:developers`,
        name: "For developers",
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:windowsinsider`,
        name: "Windows Insider Program",
        tags: [],
    },
];

export const windowsCortanaSettings: WindowsSetting[] = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:cortana-language`,
        name: `${cortanaModuleTitle}: Talk to Cortana`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:cortana-moredetails`,
        name: `${cortanaModuleTitle}: More details`,
        tags: [],
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings:cortana-notifications`,
        name: `${cortanaModuleTitle}: Notifications`,
        tags: [],
    },
];

export const windows10Apps = [
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-photos:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
        <g id="surface1">
        <path d="M 2 5 L 2 27 L 30 27 L 30 5 Z M 4 7 L 28 7 L 28 20.90625 L 22.71875 15.59375 L 22 14.875 L 17.46875 19.40625 L 11.71875 13.59375 L 11 12.875 L 4 19.875 Z M 24 9 C 22.894531 9 22 9.894531 22 11 C 22 12.105469 22.894531 13 24 13 C 25.105469 13 26 12.105469 26 11 C 26 9.894531 25.105469 9 24 9 Z M 11 15.71875 L 20.1875 25 L 4 25 L 4 22.71875 Z M 22 17.71875 L 28 23.71875 L 28 25 L 23.03125 25 L 18.875 20.8125 Z "></path>
        </g>
        </svg>`,
        name: "Photos",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}com.microsoft.builder3d:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 5 5 L 5 22.40625 L 5.28125 22.71875 L 9.28125 26.71875 L 9.59375 27 L 27 27 L 27 9.59375 L 26.71875 9.28125 L 22.71875 5.28125 L 22.40625 5 Z M 8.4375 7 L 21.5625 7 L 24.5625 10 L 11.4375 10 Z M 7 8.4375 L 10 11.4375 L 10 24.5625 L 7 21.5625 Z "></path>
            </g>
            </svg>`,
        name: "3D Builder",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-actioncenter:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 3 6 L 3 26 L 12.585938 26 L 16 29.414063 L 19.414063 26 L 29 26 L 29 6 Z M 5 8 L 27 8 L 27 24 L 18.585938 24 L 16 26.585938 L 13.414063 24 L 5 24 Z M 9 11 L 9 13 L 23 13 L 23 11 Z M 9 15 L 9 17 L 23 17 L 23 15 Z M 9 19 L 9 21 L 19 21 L 19 19 Z "></path>
            </g>
            </svg>`,
        name: "Action Center",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-clock:alarm`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 9.75 3.5 C 7.050781 4.855469 4.855469 7.050781 3.5 9.75 L 5.28125 10.625 C 6.441406 8.3125 8.3125 6.441406 10.625 5.28125 Z M 22.25 3.5 L 21.375 5.28125 C 23.6875 6.441406 25.558594 8.3125 26.71875 10.625 L 28.5 9.75 C 27.144531 7.050781 24.949219 4.855469 22.25 3.5 Z M 16 5 C 9.9375 5 5 9.9375 5 16 C 5 18.953125 6.164063 21.648438 8.0625 23.625 L 5.96875 26.9375 L 7.65625 28 L 9.59375 24.9375 C 11.398438 26.234375 13.617188 27 16 27 C 18.382813 27 20.601563 26.234375 22.40625 24.9375 L 24.3125 28 L 26 26.9375 L 23.9375 23.625 C 25.835938 21.648438 27 18.953125 27 16 C 27 9.9375 22.0625 5 16 5 Z M 16 7 C 20.980469 7 25 11.019531 25 16 C 25 20.980469 20.980469 25 16 25 C 11.019531 25 7 20.980469 7 16 C 7 11.019531 11.019531 7 16 7 Z M 15 9 L 15 17 L 21 17 L 21 15 L 17 15 L 17 9 Z "></path>
            </g>
            </svg>`,
        name: "Alarms & Clock",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-availablenetworks:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 16.9375 28 17.84375 27.882813 18.71875 27.675781 L 17.4375 24.480469 C 16.953125 25.453125 16.4375 26 16 26 C 15.925781 26 15.847656 25.972656 15.769531 25.941406 C 15.742188 25.929688 15.714844 25.921875 15.683594 25.90625 C 15.65625 25.894531 15.632813 25.871094 15.609375 25.859375 C 15.488281 25.777344 15.355469 25.664063 15.203125 25.484375 C 15.109375 25.378906 15.019531 25.253906 14.925781 25.113281 C 14.847656 24.996094 14.769531 24.863281 14.691406 24.722656 C 14.667969 24.679688 14.644531 24.632813 14.621094 24.589844 C 14.46875 24.296875 14.320313 23.957031 14.179688 23.589844 C 14.125 23.449219 14.074219 23.296875 14.023438 23.140625 C 13.921875 22.839844 13.824219 22.519531 13.734375 22.175781 C 13.71875 22.117188 13.703125 22.0625 13.6875 22 L 16.445313 22 L 15.644531 20 L 13.289063 20 C 13.214844 19.503906 13.160156 18.984375 13.113281 18.453125 C 13.09375 18.199219 13.078125 17.941406 13.0625 17.683594 C 13.03125 17.128906 13 16.578125 13 16 C 13 15.464844 13.03125 14.953125 13.058594 14.4375 C 13.078125 14.097656 13.097656 13.761719 13.125 13.4375 C 13.15625 13.113281 13.195313 12.796875 13.234375 12.484375 C 13.257813 12.320313 13.28125 12.160156 13.304688 12 L 18.695313 12 C 18.835938 12.925781 18.945313 13.910156 18.980469 15 L 14 15 L 14.007813 15.015625 L 15.589844 15.488281 L 20.976563 17.105469 C 20.976563 17.070313 20.980469 17.035156 20.984375 17 L 25.949219 17 C 25.898438 17.519531 25.804688 18.023438 25.675781 18.515625 L 27.582031 19.089844 C 27.847656 18.101563 28 17.070313 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 16.726563 6 17.675781 7.492188 18.308594 10 L 13.691406 10 C 13.703125 9.960938 13.707031 9.914063 13.71875 9.875 C 13.777344 9.648438 13.847656 9.445313 13.910156 9.230469 C 13.992188 8.972656 14.066406 8.703125 14.152344 8.476563 C 14.324219 8.007813 14.515625 7.59375 14.707031 7.25 C 14.796875 7.09375 14.882813 6.953125 14.96875 6.828125 C 15.046875 6.714844 15.125 6.605469 15.203125 6.515625 C 15.371094 6.316406 15.519531 6.191406 15.644531 6.117188 C 15.664063 6.105469 15.683594 6.09375 15.703125 6.085938 C 15.746094 6.0625 15.785156 6.046875 15.820313 6.03125 C 15.882813 6.015625 15.941406 6 16 6 Z M 12.824219 6.527344 C 12.699219 6.765625 12.585938 7.015625 12.472656 7.273438 C 12.4375 7.359375 12.402344 7.449219 12.371094 7.539063 C 12.324219 7.652344 12.277344 7.761719 12.234375 7.882813 C 12.214844 7.929688 12.203125 7.984375 12.1875 8.03125 C 12.027344 8.480469 11.886719 8.957031 11.761719 9.453125 C 11.722656 9.601563 11.6875 9.75 11.65625 9.902344 C 11.648438 9.933594 11.636719 9.96875 11.628906 10 L 8.015625 10 C 9.222656 8.40625 10.890625 7.179688 12.824219 6.527344 Z M 19.179688 6.527344 C 21.113281 7.179688 22.78125 8.40625 23.984375 10 L 20.371094 10 C 20.074219 8.683594 19.679688 7.492188 19.179688 6.527344 Z M 6.84375 12 L 11.273438 12 C 11.230469 12.324219 11.199219 12.65625 11.164063 12.988281 C 11.113281 13.484375 11.078125 13.984375 11.050781 14.503906 C 11.042969 14.671875 11.023438 14.832031 11.015625 15 L 6.050781 15 C 6.15625 13.941406 6.433594 12.933594 6.84375 12 Z M 20.726563 12 L 25.15625 12 C 25.566406 12.933594 25.84375 13.941406 25.949219 15 L 20.984375 15 C 20.949219 13.980469 20.859375 12.972656 20.726563 12 Z M 6.050781 17 L 11.015625 17 C 11.027344 17.277344 11.050781 17.550781 11.066406 17.828125 C 11.078125 18.042969 11.085938 18.261719 11.105469 18.472656 C 11.144531 18.988281 11.199219 19.5 11.269531 20 L 6.84375 20 C 6.433594 19.066406 6.15625 18.058594 6.050781 17 Z M 17 18 L 21 28 L 22.878906 25.3125 L 26 28 L 28 25.753906 L 24.707031 23.019531 L 27 21 Z M 8.019531 22 L 11.625 22 C 11.640625 22.0625 11.65625 22.121094 11.671875 22.183594 C 11.703125 22.324219 11.738281 22.457031 11.773438 22.59375 C 11.898438 23.085938 12.042969 23.5625 12.199219 24.003906 C 12.210938 24.042969 12.21875 24.085938 12.234375 24.121094 C 12.285156 24.265625 12.34375 24.402344 12.402344 24.542969 C 12.429688 24.613281 12.460938 24.691406 12.488281 24.761719 C 12.585938 24.984375 12.683594 25.195313 12.785156 25.398438 C 12.796875 25.421875 12.808594 25.449219 12.820313 25.472656 C 10.886719 24.824219 9.222656 23.597656 8.019531 22 Z "></path>
            </g>
            </svg>`,
        name: "Available Networks",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}calculator:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 6 3 L 6 29 L 26 29 L 26 3 Z M 8 5 L 24 5 L 24 27 L 8 27 Z M 10 7 L 10 13 L 22 13 L 22 7 Z M 12 9 L 20 9 L 20 11 L 12 11 Z M 11 15 L 11 17 L 13 17 L 13 15 Z M 15 15 L 15 17 L 17 17 L 17 15 Z M 19 15 L 19 17 L 21 17 L 21 15 Z M 11 19 L 11 21 L 13 21 L 13 19 Z M 15 19 L 15 21 L 17 21 L 17 19 Z M 19 19 L 19 21 L 21 21 L 21 19 Z M 11 23 L 11 25 L 13 25 L 13 23 Z M 15 23 L 15 25 L 17 25 L 17 23 Z M 19 23 L 19 25 L 21 25 L 21 23 Z "></path>
            </g>
            </svg>`,
        name: "Calculator",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}outlookcal:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z "></path>
            </g>
            </svg>`,
        name: "Calendar",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}microsoft.windows.camera:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 11.5 6 L 11.1875 6.40625 L 10 8 L 3 8 L 3 26 L 29 26 L 29 8 L 22 8 L 20.8125 6.40625 L 20.5 6 Z M 12.5 8 L 19.5 8 L 20.6875 9.59375 L 21 10 L 27 10 L 27 24 L 5 24 L 5 10 L 11 10 L 11.3125 9.59375 Z M 8 11 C 7.449219 11 7 11.449219 7 12 C 7 12.550781 7.449219 13 8 13 C 8.550781 13 9 12.550781 9 12 C 9 11.449219 8.550781 11 8 11 Z M 16 11 C 12.699219 11 10 13.699219 10 17 C 10 20.300781 12.699219 23 16 23 C 19.300781 23 22 20.300781 22 17 C 22 13.699219 19.300781 11 16 11 Z M 16 13 C 18.222656 13 20 14.777344 20 17 C 20 19.222656 18.222656 21 16 21 C 13.777344 21 12 19.222656 12 17 C 12 14.777344 13.777344 13 16 13 Z "></path>
            </g>
            </svg>`,
        name: "Camera",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-projection:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 27.28125 3.28125 L 24.625 5.9375 L 24.1875 5.46875 C 23.214844 4.496094 21.9375 4 20.65625 4 C 19.375 4 18.097656 4.496094 17.125 5.46875 L 16.40625 6.15625 L 15.5 7.0625 L 14.71875 6.28125 L 13.28125 7.71875 L 16.0625 10.5 L 13.28125 13.28125 L 14.71875 14.71875 L 17.5 11.9375 L 20.0625 14.5 L 17.28125 17.28125 L 18.71875 18.71875 L 21.5 15.9375 L 24.28125 18.71875 L 25.71875 17.28125 L 24.9375 16.5 L 26.53125 14.875 C 28.476563 12.929688 28.476563 9.757813 26.53125 7.8125 L 26.0625 7.375 L 28.71875 4.71875 Z M 20.65625 6 C 21.421875 6 22.191406 6.285156 22.78125 6.875 L 25.125 9.21875 C 26.304688 10.398438 26.304688 12.289063 25.125 13.46875 L 24.875 13.6875 L 23.5 15.0625 L 16.9375 8.5 L 18.53125 6.875 C 19.121094 6.285156 19.890625 6 20.65625 6 Z M 7.71875 13.28125 L 6.28125 14.71875 L 7.0625 15.5 L 5.46875 17.125 C 3.523438 19.070313 3.523438 22.242188 5.46875 24.1875 L 5.90625 24.65625 L 3.28125 27.28125 L 4.71875 28.71875 L 7.34375 26.09375 L 7.8125 26.53125 C 9.757813 28.476563 12.929688 28.476563 14.875 26.53125 L 16.5 24.9375 L 17.28125 25.71875 L 18.71875 24.28125 Z M 8.5 16.9375 L 15.0625 23.5 L 13.46875 25.125 C 12.289063 26.304688 10.398438 26.304688 9.21875 25.125 L 9 24.875 L 6.875 22.78125 C 5.695313 21.601563 5.695313 19.710938 6.875 18.53125 Z "></path>
            </g>
            </svg>`,
        name: "Connect",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-cortana:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" d="M 16 3 A 1 1 0 0 0 15 4 A 1 1 0 0 0 16 5 A 1 1 0 0 0 17 4 A 1 1 0 0 0 16 3 z M 11.847656 3.7246094 A 1 1 0 0 0 11.554688 3.7851562 A 1 1 0 0 0 10.957031 5.0664062 A 1 1 0 0 0 12.238281 5.6640625 A 1 1 0 0 0 12.835938 4.3828125 A 1 1 0 0 0 11.847656 3.7246094 z M 20.082031 3.7246094 A 1 1 0 0 0 19.164062 4.3828125 A 1 1 0 0 0 19.761719 5.6640625 A 1 1 0 0 0 21.042969 5.0664062 A 1 1 0 0 0 20.445312 3.7851562 A 1 1 0 0 0 20.082031 3.7246094 z M 8.2890625 5.8066406 A 1 1 0 0 0 7.6445312 6.0410156 A 1 1 0 0 0 7.5214844 7.4492188 A 1 1 0 0 0 8.9296875 7.5722656 A 1 1 0 0 0 9.0527344 6.1640625 A 1 1 0 0 0 8.2890625 5.8066406 z M 23.740234 5.8085938 A 1 1 0 0 0 22.947266 6.1660156 A 1 1 0 0 0 23.070312 7.5742188 A 1 1 0 0 0 24.478516 7.4511719 A 1 1 0 0 0 24.355469 6.0429688 A 1 1 0 0 0 23.740234 5.8085938 z M 16 6 C 10.488997 6 6 10.488997 6 16 C 6 21.511003 10.488997 26 16 26 C 21.511003 26 26 21.511003 26 16 C 26 10.488997 21.511003 6 16 6 z M 16 8 C 20.430123 8 24 11.569877 24 16 C 24 20.430123 20.430123 24 16 24 C 11.569877 24 8 20.430123 8 16 C 8 11.569877 11.569877 8 16 8 z M 26.367188 9 A 1 1 0 0 0 25.890625 9.1328125 A 1 1 0 0 0 25.525391 10.5 A 1 1 0 0 0 26.890625 10.865234 A 1 1 0 0 0 27.257812 9.5 A 1 1 0 0 0 26.367188 9 z M 5.5605469 9.0019531 A 1 1 0 0 0 4.7421875 9.5 A 1 1 0 0 0 5.1074219 10.865234 A 1 1 0 0 0 6.4746094 10.5 A 1 1 0 0 0 6.1074219 9.1347656 A 1 1 0 0 0 5.5605469 9.0019531 z M 4.1855469 12.916016 A 1 1 0 0 0 3.1972656 13.742188 A 1 1 0 0 0 4.0078125 14.900391 A 1 1 0 0 0 5.1660156 14.089844 A 1 1 0 0 0 4.3554688 12.931641 A 1 1 0 0 0 4.1855469 12.916016 z M 27.841797 12.917969 A 1 1 0 0 0 27.642578 12.931641 A 1 1 0 0 0 26.832031 14.091797 A 1 1 0 0 0 27.990234 14.902344 A 1 1 0 0 0 28.802734 13.744141 A 1 1 0 0 0 27.841797 12.917969 z M 4.2070312 17.083984 A 1 1 0 0 0 4.0078125 17.099609 A 1 1 0 0 0 3.1953125 18.257812 A 1 1 0 0 0 4.3554688 19.068359 A 1 1 0 0 0 5.1660156 17.910156 A 1 1 0 0 0 4.2070312 17.083984 z M 27.820312 17.083984 A 1 1 0 0 0 26.832031 17.910156 A 1 1 0 0 0 27.644531 19.068359 A 1 1 0 0 0 28.802734 18.255859 A 1 1 0 0 0 27.990234 17.097656 A 1 1 0 0 0 27.820312 17.083984 z M 5.5839844 21 A 1 1 0 0 0 5.1074219 21.132812 A 1 1 0 0 0 4.7421875 22.5 A 1 1 0 0 0 6.1074219 22.865234 A 1 1 0 0 0 6.4746094 21.5 A 1 1 0 0 0 5.5839844 21 z M 26.345703 21.001953 A 1 1 0 0 0 25.527344 21.5 A 1 1 0 0 0 25.892578 22.867188 A 1 1 0 0 0 27.257812 22.5 A 1 1 0 0 0 26.892578 21.134766 A 1 1 0 0 0 26.345703 21.001953 z M 23.714844 24.191406 A 1 1 0 0 0 23.070312 24.425781 A 1 1 0 0 0 22.947266 25.833984 A 1 1 0 0 0 24.355469 25.958984 A 1 1 0 0 0 24.478516 24.548828 A 1 1 0 0 0 23.714844 24.191406 z M 8.3144531 24.195312 A 1 1 0 0 0 7.5214844 24.550781 A 1 1 0 0 0 7.6445312 25.960938 A 1 1 0 0 0 9.0527344 25.837891 A 1 1 0 0 0 8.9296875 24.427734 A 1 1 0 0 0 8.3144531 24.195312 z M 11.873047 26.275391 A 1 1 0 0 0 10.955078 26.933594 A 1 1 0 0 0 11.552734 28.214844 A 1 1 0 0 0 12.835938 27.617188 A 1 1 0 0 0 12.238281 26.335938 A 1 1 0 0 0 11.873047 26.275391 z M 20.054688 26.277344 A 1 1 0 0 0 19.761719 26.337891 A 1 1 0 0 0 19.164062 27.619141 A 1 1 0 0 0 20.445312 28.216797 A 1 1 0 0 0 21.042969 26.935547 A 1 1 0 0 0 20.054688 26.277344 z M 16 27 A 1 1 0 0 0 15 28 A 1 1 0 0 0 16 29 A 1 1 0 0 0 17 28 A 1 1 0 0 0 16 27 z"></path>
            </svg>`,
        name: "Cortana",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-settings-connectabledevices:devicediscovery`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 11 5 C 9.03125 5 7.460938 6.441406 7.125 8.3125 C 5.234375 8.789063 3.59375 10.019531 2.875 11.96875 L 2.84375 11.96875 L 0.71875 17.9375 C 0.265625 18.863281 0 19.902344 0 21 C 0 24.855469 3.144531 28 7 28 C 10.472656 28 13.367188 25.449219 13.90625 22.125 C 14.449219 22.660156 15.1875 23 16 23 C 16.8125 23 17.550781 22.660156 18.09375 22.125 C 18.632813 25.449219 21.527344 28 25 28 C 28.855469 28 32 24.855469 32 21 C 32 20.027344 31.800781 19.09375 31.4375 18.25 L 29.15625 11.875 L 29.125 11.84375 L 29.125 11.8125 C 28.394531 10.039063 26.777344 8.800781 24.875 8.3125 C 24.539063 6.441406 22.96875 5 21 5 C 19.144531 5 17.636719 6.285156 17.1875 8 L 14.8125 8 C 14.363281 6.285156 12.855469 5 11 5 Z M 11 7 C 12.191406 7 13 7.808594 13 9 L 13 10 L 19 10 L 19 9 C 19 7.808594 19.808594 7 21 7 C 22.191406 7 23 7.808594 23 9 L 23 9.90625 L 23.90625 10 C 25.390625 10.15625 26.671875 11.191406 27.25 12.53125 C 27.257813 12.550781 27.273438 12.574219 27.28125 12.59375 L 28.03125 14.71875 C 27.113281 14.273438 26.085938 14 25 14 C 22.074219 14 19.574219 15.816406 18.53125 18.375 C 17.996094 17.542969 17.050781 17 16 17 C 14.949219 17 14.003906 17.542969 13.46875 18.375 C 12.425781 15.816406 9.925781 14 7 14 C 5.929688 14 4.910156 14.253906 4 14.6875 L 4.75 12.65625 L 4.75 12.625 C 5.332031 11.078125 6.558594 10.160156 8.09375 10 L 9 9.90625 L 9 9 C 9 7.808594 9.808594 7 11 7 Z M 7 16 C 9.773438 16 12 18.226563 12 21 C 12 23.773438 9.773438 26 7 26 C 4.226563 26 2 23.773438 2 21 C 2 20.292969 2.175781 19.640625 2.4375 19.03125 C 2.453125 18.992188 2.453125 18.945313 2.46875 18.90625 C 3.257813 17.191406 4.980469 16 7 16 Z M 25 16 C 27.773438 16 30 18.226563 30 21 C 30 23.773438 27.773438 26 25 26 C 22.226563 26 20 23.773438 20 21 C 20 18.226563 22.226563 16 25 16 Z M 16 19 C 16.5625 19 17 19.4375 17 20 C 17 20.5625 16.5625 21 16 21 C 15.4375 21 15 20.5625 15 20 C 15 19.4375 15.4375 19 16 19 Z "></path>
            </g>
            </svg>`,
        name: "Device Discovery",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-contact-support:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 2 5 L 2 21 L 6 21 L 6 26.09375 L 7.625 24.78125 L 12.34375 21 L 22 21 L 22 5 Z M 4 7 L 20 7 L 20 19 L 11.65625 19 L 11.375 19.21875 L 8 21.90625 L 8 19 L 4 19 Z M 24 9 L 24 11 L 28 11 L 28 23 L 24 23 L 24 25.90625 L 20.34375 23 L 12.84375 23 L 10.34375 25 L 19.65625 25 L 26 30.09375 L 26 25 L 30 25 L 30 9 Z "></path>
            </g>
            </svg>`,
        name: "Get Help",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}mswindowsmusic:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 12.855469 27.863281 9.96875 26 7.71875 L 24.375 8.875 C 24.378906 8.882813 24.371094 8.898438 24.375 8.90625 L 21.75 10.65625 L 22.84375 12.3125 L 25.53125 10.53125 C 26.464844 12.144531 27 14.007813 27 16 C 27 22.066406 22.066406 27 16 27 C 9.933594 27 5 22.066406 5 16 C 5 9.933594 9.933594 5 16 5 C 18.113281 5 20.070313 5.617188 21.75 6.65625 L 23.5 5.40625 C 21.375 3.894531 18.800781 3 16 3 Z M 16 11 C 13.238281 11 11 13.238281 11 16 C 11 18.761719 13.238281 21 16 21 C 18.761719 21 21 18.761719 21 16 C 21 13.238281 18.761719 11 16 11 Z M 16 14 C 17.105469 14 18 14.894531 18 16 C 18 17.105469 17.105469 18 16 18 C 14.894531 18 14 17.105469 14 16 C 14 14.894531 14.894531 14 16 14 Z "></path>
            </g>
            </svg>`,
        name: "Groove Music",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}outlookmail:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 3 8 L 3 26 L 29 26 L 29 8 Z M 7.3125 10 L 24.6875 10 L 16 15.78125 Z M 5 10.875 L 15.4375 17.84375 L 16 18.1875 L 16.5625 17.84375 L 27 10.875 L 27 24 L 5 24 Z "></path>
            </g>
            </svg>`,
        name: "Mail",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}bingmaps:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 28 4.46875 L 26.59375 5.09375 L 19.96875 7.9375 L 12.34375 5.0625 L 11.96875 4.9375 L 11.59375 5.09375 L 4.59375 8.09375 L 4 8.34375 L 4 27.53125 L 5.40625 26.90625 L 12.03125 24.0625 L 19.65625 26.9375 L 20.03125 27.0625 L 20.40625 26.90625 L 27.40625 23.90625 L 28 23.65625 Z M 13 7.4375 L 19 9.6875 L 19 24.5625 L 13 22.3125 Z M 11 7.5 L 11 22.34375 L 6 24.5 L 6 9.65625 Z M 26 7.5 L 26 22.34375 L 21 24.5 L 21 9.65625 Z "></path>
            </g>
            </svg>`,
        name: "Maps",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}microsoft-edge:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 9.960938 10.828125 C 7.34375 12.457031 5.847656 14.769531 5.847656 14.769531 C 5.847656 14.769531 6.234375 9.917969 9.960938 7.074219 C 11.441406 5.945313 13.46875 5 16.191406 5 C 17.214844 5 19.359375 5.179688 21.292969 6.371094 C 23.226563 7.5625 24.007813 8.558594 24.878906 10.023438 C 25.253906 10.652344 25.5625 11.464844 25.753906 12.246094 C 26.109375 13.710938 26.152344 15.460938 26.152344 15.460938 L 26.152344 17.769531 L 12.335938 17.769531 C 12.335938 17.769531 12 22.410156 18.355469 22.410156 C 20.5625 22.410156 21.339844 22.0625 22.066406 21.847656 C 23.203125 21.511719 24.300781 20.761719 24.300781 20.761719 L 24.304688 25.398438 C 24.304688 25.398438 21.703125 27 17.773438 27 C 16.667969 27 15.503906 26.90625 14.378906 26.542969 C 13.394531 26.222656 11.339844 25.363281 9.960938 23.347656 C 9.472656 22.636719 8.945313 21.6875 8.683594 20.761719 C 8.398438 19.757813 8.402344 18.785156 8.402344 18.246094 C 8.402344 16.242188 9.089844 14.328125 10.277344 12.941406 C 11.816406 11.148438 13.765625 10.359375 13.765625 10.359375 C 13.765625 10.359375 13.132813 11.097656 12.742188 12.019531 C 12.351563 12.941406 12.242188 13.867188 12.242188 13.867188 L 20.046875 13.867188 C 20.046875 13.867188 20.503906 9.203125 15.632813 9.203125 C 13.796875 9.203125 11.542969 9.84375 9.960938 10.828125 Z "></path>
            </g>
            </svg>`,
        name: "Microsoft Edge",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-windows-store:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 13.769531 4.011719 C 13.53125 4.027344 13.289063 4.078125 13.050781 4.15625 L 11.050781 4.820313 C 9.828125 5.230469 9 6.382813 9 7.667969 L 9 10.957031 L 5 11.519531 L 5 26.480469 L 23 29 L 27 27.679688 L 27 10.4375 L 23 9 L 21 9.28125 L 21 8 C 21 6.488281 19.855469 5.285156 18.476563 5.046875 C 18.015625 4.96875 17.53125 4.996094 17.050781 5.15625 L 16.480469 5.347656 C 16.015625 4.667969 15.289063 4.1875 14.476563 4.046875 C 14.246094 4.007813 14.011719 3.996094 13.769531 4.011719 Z M 13.933594 6 C 14.507813 5.945313 15 6.378906 15 7 L 15 10.121094 L 11 10.679688 L 11 7.667969 C 11 7.234375 11.269531 6.859375 11.683594 6.71875 L 13.683594 6.054688 C 13.769531 6.023438 13.851563 6.007813 13.933594 6 Z M 17.933594 7 C 18.507813 6.949219 19 7.378906 19 8 L 19 9.5625 L 17 9.839844 L 17 7.28125 L 17.683594 7.054688 C 17.769531 7.023438 17.851563 7.007813 17.933594 7 Z M 22.785156 11.046875 L 25 11.84375 L 25 26.234375 L 22.816406 26.953125 L 7 24.738281 L 7 13.261719 Z M 19 13.597656 L 14 14.300781 L 14 18 L 19 18 Z M 13 14.4375 L 9 15 L 9 18 L 13 18 Z M 9 19 L 9 22 L 13 22.5625 L 13 19 Z M 14 19 L 14 22.699219 L 19 23.402344 L 19 19 Z "></path>
            </g>
            </svg>`,
        name: "Microsoft Store",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-holocamera:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 8 5 C 6.171875 5 4.996094 6.074219 4.5 7.0625 C 4.300781 7.457031 4.195313 7.832031 4.125 8.15625 C 2.90625 8.539063 2 9.664063 2 11 L 2 24 C 2 25.644531 3.355469 27 5 27 L 12 27 C 13.320313 27 14.519531 26.203125 15.0625 25 L 16.9375 25 C 17.476563 26.203125 18.679688 27 20 27 L 27 27 C 28.644531 27 30 25.644531 30 24 L 30 11 C 30 9.664063 29.09375 8.539063 27.875 8.15625 C 27.804688 7.832031 27.699219 7.457031 27.5 7.0625 C 27.003906 6.078125 25.820313 5 24 5 Z M 8 7 L 24 7 C 25.148438 7 25.457031 7.421875 25.71875 7.9375 C 25.730469 7.960938 25.738281 7.976563 25.75 8 L 6.25 8 C 6.261719 7.976563 6.269531 7.960938 6.28125 7.9375 C 6.539063 7.425781 6.839844 7 8 7 Z M 5 10 L 27 10 C 27.566406 10 28 10.433594 28 11 L 28 24 C 28 24.566406 27.566406 25 27 25 L 20 25 C 19.457031 25 18.964844 24.667969 18.75 24.15625 L 17.71875 21.40625 L 17.71875 21.375 L 17.6875 21.34375 C 17.390625 20.648438 16.726563 20.1875 15.96875 20.1875 C 15.207031 20.1875 14.515625 20.648438 14.21875 21.34375 L 14.1875 21.375 L 14.1875 21.4375 L 13.25 24.15625 C 13.03125 24.667969 12.542969 25 12 25 L 5 25 C 4.433594 25 4 24.566406 4 24 L 4 11 C 4 10.433594 4.433594 10 5 10 Z M 10 13 C 7.800781 13 6 14.800781 6 17 C 6 19.199219 7.800781 21 10 21 C 12.199219 21 14 19.199219 14 17 C 14 14.800781 12.199219 13 10 13 Z M 22 13 C 19.800781 13 18 14.800781 18 17 C 18 19.199219 19.800781 21 22 21 C 24.199219 21 26 19.199219 26 17 C 26 14.800781 24.199219 13 22 13 Z M 10 15 C 11.117188 15 12 15.882813 12 17 C 12 18.117188 11.117188 19 10 19 C 8.882813 19 8 18.117188 8 17 C 8 15.882813 8.882813 15 10 15 Z M 22 15 C 23.117188 15 24 15.882813 24 17 C 24 18.117188 23.117188 19 22 19 C 20.882813 19 20 18.117188 20 17 C 20 15.882813 20.882813 15 22 15 Z M 15.96875 22.4375 L 16.1875 23 L 15.78125 23 Z "></path>
            </g>
            </svg>`,
        name: "Mixed Reality Camera",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-holographicfirstrun:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 8 5 C 6.171875 5 4.996094 6.074219 4.5 7.0625 C 4.300781 7.457031 4.195313 7.832031 4.125 8.15625 C 2.90625 8.539063 2 9.664063 2 11 L 2 24 C 2 25.644531 3.355469 27 5 27 L 12 27 C 13.320313 27 14.519531 26.203125 15.0625 25 L 16.9375 25 C 17.476563 26.203125 18.679688 27 20 27 L 27 27 C 28.644531 27 30 25.644531 30 24 L 30 11 C 30 9.664063 29.09375 8.539063 27.875 8.15625 C 27.804688 7.832031 27.699219 7.457031 27.5 7.0625 C 27.003906 6.078125 25.820313 5 24 5 Z M 8 7 L 24 7 C 25.148438 7 25.457031 7.421875 25.71875 7.9375 C 25.730469 7.960938 25.738281 7.976563 25.75 8 L 6.25 8 C 6.261719 7.976563 6.269531 7.960938 6.28125 7.9375 C 6.539063 7.425781 6.839844 7 8 7 Z M 5 10 L 27 10 C 27.566406 10 28 10.433594 28 11 L 28 24 C 28 24.566406 27.566406 25 27 25 L 20 25 C 19.457031 25 18.964844 24.667969 18.75 24.15625 L 17.71875 21.40625 L 17.71875 21.375 L 17.6875 21.34375 C 17.390625 20.648438 16.726563 20.1875 15.96875 20.1875 C 15.207031 20.1875 14.515625 20.648438 14.21875 21.34375 L 14.1875 21.375 L 14.1875 21.4375 L 13.25 24.15625 C 13.03125 24.667969 12.542969 25 12 25 L 5 25 C 4.433594 25 4 24.566406 4 24 L 4 11 C 4 10.433594 4.433594 10 5 10 Z M 10 13 C 7.800781 13 6 14.800781 6 17 C 6 19.199219 7.800781 21 10 21 C 12.199219 21 14 19.199219 14 17 C 14 14.800781 12.199219 13 10 13 Z M 22 13 C 19.800781 13 18 14.800781 18 17 C 18 19.199219 19.800781 21 22 21 C 24.199219 21 26 19.199219 26 17 C 26 14.800781 24.199219 13 22 13 Z M 10 15 C 11.117188 15 12 15.882813 12 17 C 12 18.117188 11.117188 19 10 19 C 8.882813 19 8 18.117188 8 17 C 8 15.882813 8.882813 15 10 15 Z M 22 15 C 23.117188 15 24 15.882813 24 17 C 24 18.117188 23.117188 19 22 19 C 20.882813 19 20 18.117188 20 17 C 20 15.882813 20.882813 15 22 15 Z M 15.96875 22.4375 L 16.1875 23 L 15.78125 23 Z "></path>
            </g>
            </svg>`,
        name: "Mixed Reality Portal",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}mswindowsvideo:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 3 6 L 3 26 L 29 26 L 29 6 Z M 5 8 L 8.25 8 L 9.59375 10 L 8.25 12 L 5 12 Z M 10.65625 8 L 13.0625 8 L 14.40625 10 L 13.0625 12 L 10.65625 12 L 11.625 10.5625 L 12 10 L 11.625 9.4375 Z M 15.46875 8 L 17.84375 8 L 19.1875 10 L 17.84375 12 L 15.46875 12 L 16.4375 10.5625 L 16.8125 10 L 16.4375 9.4375 Z M 20.25 8 L 22.65625 8 L 24 10 L 22.65625 12 L 20.25 12 L 21.21875 10.5625 L 21.59375 10 L 21.21875 9.4375 Z M 25.0625 8 L 27 8 L 27 12 L 25.0625 12 L 26.03125 10.5625 L 26.40625 10 L 26.03125 9.4375 Z M 7 9 C 6.449219 9 6 9.449219 6 10 C 6 10.550781 6.449219 11 7 11 C 7.550781 11 8 10.550781 8 10 C 8 9.449219 7.550781 9 7 9 Z M 5 14 L 27 14 L 27 24 L 5 24 Z "></path>
            </g>
            </svg>`,
        name: "Movies & TV",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}bingnews:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 3 5 L 3 23 C 3 25.210938 4.789063 27 7 27 L 25 27 C 27.210938 27 29 25.210938 29 23 L 29 12 L 23 12 L 23 5 Z M 5 7 L 21 7 L 21 23 C 21 23.730469 21.222656 24.410156 21.5625 25 L 7 25 C 5.808594 25 5 24.191406 5 23 Z M 7 9 L 7 14 L 19 14 L 19 9 Z M 9 11 L 17 11 L 17 12 L 9 12 Z M 23 14 L 27 14 L 27 23 C 27 24.191406 26.191406 25 25 25 C 23.808594 25 23 24.191406 23 23 Z M 7 15 L 7 17 L 12 17 L 12 15 Z M 14 15 L 14 17 L 19 17 L 19 15 Z M 7 18 L 7 20 L 12 20 L 12 18 Z M 14 18 L 14 20 L 19 20 L 19 18 Z M 7 21 L 7 23 L 12 23 L 12 21 Z M 14 21 L 14 23 L 19 23 L 19 21 Z "></path>
            </g>
            </svg>`,
        name: "News",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}onenote:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 15.875 4 L 15.78125 4.03125 L 4.78125 6.46875 L 4 6.65625 L 4 25.34375 L 4.78125 25.53125 L 15.78125 27.96875 L 15.875 28 L 18 28 L 18 25 L 25 25 L 25 13 L 28 13 L 28 7 L 18 7 L 18 4 Z M 16 6.03125 L 16 25.96875 L 6 23.78125 L 6 8.21875 Z M 18 9 L 26 9 L 26 11 L 23 11 L 23 23 L 18 23 L 18 21 L 22 21 L 22 19 L 18 19 L 18 18 L 22 18 L 22 16 L 18 16 L 18 15 L 22 15 L 22 13 L 18 13 L 18 12 L 22 12 L 22 10 L 18 10 Z M 14 11 L 12 11.34375 L 12 17 L 10.1875 11.625 L 8 12 L 8 20 L 10 20.34375 L 10 15 L 11.875 20.65625 L 14 21 Z M 26 14 L 26 19 L 28 19 L 28 14 Z M 26 20 L 26 25 L 28 25 L 28 20 Z "></path>
            </g>
            </svg>`,
        name: "OneNote",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-paint:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 15.59375 2.96875 C 15.0625 2.984375 14.515625 3.042969 13.96875 3.125 L 13.9375 3.125 C 8.613281 3.996094 4.300781 8.191406 3.21875 13.5 C 2.894531 15.011719 2.914063 16.421875 3.125 17.8125 C 3.132813 17.816406 3.125 17.835938 3.125 17.84375 C 3.453125 20.191406 6.5 21.21875 8.21875 19.5 C 9.449219 18.269531 11.269531 18.269531 12.5 19.5 C 13.730469 20.730469 13.730469 22.550781 12.5 23.78125 C 10.78125 25.5 11.808594 28.546875 14.15625 28.875 C 14.164063 28.875 14.183594 28.867188 14.1875 28.875 C 15.566406 29.085938 16.96875 29.097656 18.46875 28.78125 C 18.480469 28.78125 18.488281 28.78125 18.5 28.78125 C 23.824219 27.789063 28.007813 23.375 28.875 18.0625 L 28.875 18.03125 C 30.007813 10.390625 24.421875 3.71875 17.15625 3.03125 C 16.636719 2.980469 16.125 2.953125 15.59375 2.96875 Z M 15.625 4.96875 C 16.078125 4.953125 16.527344 4.960938 16.96875 5 C 23.164063 5.566406 27.875 11.214844 26.90625 17.75 C 26.175781 22.226563 22.585938 25.992188 18.125 26.8125 L 18.09375 26.8125 C 16.816406 27.085938 15.636719 27.089844 14.4375 26.90625 C 13.617188 26.804688 13.238281 25.886719 13.90625 25.21875 C 15.875 23.25 15.875 20.0625 13.90625 18.09375 C 11.9375 16.125 8.75 16.125 6.78125 18.09375 C 6.113281 18.761719 5.195313 18.382813 5.09375 17.5625 C 4.910156 16.363281 4.914063 15.183594 5.1875 13.90625 C 6.105469 9.417969 9.773438 5.824219 14.25 5.09375 C 14.71875 5.023438 15.171875 4.984375 15.625 4.96875 Z M 14 7 C 12.894531 7 12 7.894531 12 9 C 12 10.105469 12.894531 11 14 11 C 15.105469 11 16 10.105469 16 9 C 16 7.894531 15.105469 7 14 7 Z M 21 9 C 19.894531 9 19 9.894531 19 11 C 19 12.105469 19.894531 13 21 13 C 22.105469 13 23 12.105469 23 11 C 23 9.894531 22.105469 9 21 9 Z M 9 11 C 7.894531 11 7 11.894531 7 13 C 7 14.105469 7.894531 15 9 15 C 10.105469 15 11 14.105469 11 13 C 11 11.894531 10.105469 11 9 11 Z M 23 16 C 21.894531 16 21 16.894531 21 18 C 21 19.105469 21.894531 20 23 20 C 24.105469 20 25 19.105469 25 18 C 25 16.894531 24.105469 16 23 16 Z M 19 21 C 17.894531 21 17 21.894531 17 23 C 17 24.105469 17.894531 25 19 25 C 20.105469 25 21 24.105469 21 23 C 21 21.894531 20.105469 21 19 21 Z "></path>
            </g>
            </svg>`,
        name: "Paint 3D",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-people:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 16 8 C 13.25 8 11 10.25 11 13 C 11 14.515625 11.707031 15.863281 12.78125 16.78125 C 11.714844 17.339844 10.78125 18.183594 10.125 19.1875 C 9.769531 18.671875 9.300781 18.195313 8.78125 17.84375 C 9.523438 17.117188 10 16.113281 10 15 C 10 12.800781 8.199219 11 6 11 C 3.800781 11 2 12.800781 2 15 C 2 16.113281 2.476563 17.117188 3.21875 17.84375 C 1.886719 18.746094 1 20.285156 1 22 L 3 22 C 3 20.34375 4.34375 19 6 19 C 7.65625 19 9 20.34375 9 22 L 9 23 L 11 23 C 11 20.246094 13.246094 18 16 18 C 18.753906 18 21 20.246094 21 23 L 23 23 L 23 22 C 23 20.34375 24.34375 19 26 19 C 27.65625 19 29 20.34375 29 22 L 31 22 C 31 20.285156 30.113281 18.746094 28.78125 17.84375 C 29.523438 17.117188 30 16.113281 30 15 C 30 12.800781 28.199219 11 26 11 C 23.800781 11 22 12.800781 22 15 C 22 16.113281 22.476563 17.117188 23.21875 17.84375 C 22.699219 18.195313 22.230469 18.671875 21.875 19.1875 C 21.21875 18.183594 20.285156 17.339844 19.21875 16.78125 C 20.292969 15.863281 21 14.515625 21 13 C 21 10.25 18.75 8 16 8 Z M 16 10 C 17.667969 10 19 11.332031 19 13 C 19 14.667969 17.667969 16 16 16 C 14.332031 16 13 14.667969 13 13 C 13 11.332031 14.332031 10 16 10 Z M 6 13 C 7.117188 13 8 13.882813 8 15 C 8 16.117188 7.117188 17 6 17 C 4.882813 17 4 16.117188 4 15 C 4 13.882813 4.882813 13 6 13 Z M 26 13 C 27.117188 13 28 13.882813 28 15 C 28 16.117188 27.117188 17 26 17 C 24.882813 17 24 16.117188 24 15 C 24 13.882813 24.882813 13 26 13 Z "></path>
            </g>
            </svg>`,
        name: "People",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-get-started:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 6.8125 2.40625 L 5.40625 3.8125 L 7.5 5.90625 L 8.90625 4.5 Z M 25.1875 2.40625 L 23.09375 4.5 L 24.5 5.90625 L 26.59375 3.8125 Z M 16 3.03125 C 15.671875 3.035156 15.335938 3.054688 15 3.09375 C 14.988281 3.09375 14.980469 3.09375 14.96875 3.09375 C 10.914063 3.558594 7.6875 6.835938 7.125 10.875 C 6.675781 14.125 8.015625 17.070313 10.25 18.96875 C 11.207031 19.789063 11.796875 20.882813 12 22 L 12 28 L 14.28125 28 C 14.628906 28.597656 15.261719 29 16 29 C 16.738281 29 17.371094 28.597656 17.71875 28 L 20 28 L 20 24 L 20.09375 24 L 20.09375 22.8125 C 20.09375 21.347656 20.855469 19.867188 22.09375 18.71875 C 23.75 17.0625 25 14.707031 25 12 C 25 7.058594 20.933594 2.984375 16 3.03125 Z M 16 5.03125 C 19.863281 4.976563 23 8.140625 23 12 C 23 14.09375 22.03125 15.9375 20.6875 17.28125 L 20.71875 17.3125 C 19.375 18.566406 18.515625 20.207031 18.28125 22 L 13.90625 22 C 13.6875 20.285156 12.949219 18.628906 11.5625 17.4375 C 9.796875 15.933594 8.742188 13.675781 9.09375 11.125 C 9.53125 7.972656 12.085938 5.441406 15.21875 5.09375 C 15.480469 5.0625 15.742188 5.035156 16 5.03125 Z M 2 12 L 2 14 L 5 14 L 5 12 Z M 27 12 L 27 14 L 30 14 L 30 12 Z M 7.5 20.09375 L 5.40625 22.1875 L 6.8125 23.59375 L 8.90625 21.5 Z M 24.5 20.09375 L 23.09375 21.5 L 25.1875 23.59375 L 26.59375 22.1875 Z M 14 24 L 18 24 L 18 26 L 14 26 Z "></path>
            </g>
            </svg>`,
        name: "Tips",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}com.microsoft.3dviewer:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 5 5 L 5 22.40625 L 5.28125 22.71875 L 9.28125 26.71875 L 9.59375 27 L 27 27 L 27 9.59375 L 26.71875 9.28125 L 22.71875 5.28125 L 22.40625 5 Z M 8.4375 7 L 21.5625 7 L 24.5625 10 L 11.4375 10 Z M 7 8.4375 L 10 11.4375 L 10 24.5625 L 7 21.5625 Z "></path>
            </g>
            </svg>`,
        name: "View 3D Preview",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-callrecording:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 13 4 C 11.90625 4 11 4.90625 11 6 L 11 18 C 11 19.09375 11.90625 20 13 20 L 19 20 C 20.09375 20 21 19.09375 21 18 L 21 6 C 21 4.90625 20.09375 4 19 4 Z M 13 6 L 19 6 L 19 18 L 13 18 Z M 7 14 L 7 18 C 7 21.300781 9.699219 24 13 24 L 15 24 L 15 26 L 11 26 L 11 28 L 21 28 L 21 26 L 17 26 L 17 24 L 19 24 C 22.300781 24 25 21.300781 25 18 L 25 14 L 23 14 L 23 18 C 23 20.21875 21.21875 22 19 22 L 13 22 C 10.78125 22 9 20.21875 9 18 L 9 14 Z "></path>
            </g>
            </svg>`,
        name: "Voice Recorder",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}bingweather:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 9 6 L 9 9.09375 C 8.367188 9.222656 7.773438 9.496094 7.25 9.84375 L 5.0625 7.625 L 3.625 9.0625 L 5.84375 11.25 C 5.496094 11.773438 5.222656 12.367188 5.09375 13 L 2 13 L 2 15 L 5.125 15 C 5.253906 15.628906 5.507813 16.199219 5.84375 16.71875 L 3.625 18.9375 L 4.25 19.5625 C 4.113281 20.019531 4 20.5 4 21 C 4 23.757813 6.242188 26 9 26 L 25 26 C 27.757813 26 30 23.757813 30 21 C 30 18.980469 28.789063 17.179688 26.96875 16.40625 C 26.6875 13.988281 24.65625 12.097656 22.1875 12 C 21.125 10.152344 19.164063 9 17 9 C 16.773438 9 16.5625 9.007813 16.34375 9.03125 L 14.9375 7.625 L 12.75 9.84375 C 12.226563 9.507813 11.628906 9.253906 11 9.125 L 11 6 Z M 10 11 C 10.765625 11 11.445313 11.285156 11.96875 11.75 C 11.707031 12.152344 11.472656 12.597656 11.3125 13.0625 C 9.730469 13.332031 8.460938 14.542969 8.09375 16.09375 C 8.039063 16.101563 7.988281 16.113281 7.9375 16.125 C 7.378906 15.582031 7 14.847656 7 14 C 7 12.332031 8.332031 11 10 11 Z M 17 11 C 18.605469 11 20.054688 11.960938 20.6875 13.4375 L 20.96875 14.125 L 21.875 14.03125 C 21.917969 14.023438 21.953125 14 22 14 C 23.652344 14 24.996094 15.351563 25 16.9375 L 24.96875 17.90625 L 25.75 18.09375 C 27.082031 18.433594 28 19.636719 28 21 C 28 22.652344 26.652344 24 25 24 L 9 24 C 7.347656 24 6 22.652344 6 21 C 6 19.347656 7.347656 18 9 18 L 10 18 L 10 17 C 10 15.898438 10.894531 15.003906 11.90625 15 L 12.90625 15.0625 L 13.09375 14.21875 C 13.46875 12.359375 15.101563 11 17 11 Z "></path>
            </g>
            </svg>`,
        name: "Weather",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}windowsdefender:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 16 4 C 13.75 4 12.234375 4.886719 10.875 5.625 C 9.515625 6.363281 8.28125 7 6 7 L 5 7 L 5 8 C 5 15.71875 7.609375 20.742188 10.25 23.78125 C 12.890625 26.820313 15.625 27.9375 15.625 27.9375 L 16 28.0625 L 16.375 27.9375 C 16.375 27.9375 19.109375 26.84375 21.75 23.8125 C 24.390625 20.78125 27 15.746094 27 8 L 27 7 L 26 7 C 23.730469 7 22.484375 6.363281 21.125 5.625 C 19.765625 4.886719 18.25 4 16 4 Z M 16 6 C 17.75 6 18.753906 6.613281 20.15625 7.375 C 21.339844 8.019531 22.910156 8.636719 24.9375 8.84375 C 24.746094 15.609375 22.507813 19.910156 20.25 22.5 C 18.203125 24.847656 16.484375 25.628906 16 25.84375 C 15.511719 25.625 13.796875 24.824219 11.75 22.46875 C 9.492188 19.871094 7.253906 15.578125 7.0625 8.84375 C 9.097656 8.636719 10.660156 8.019531 11.84375 7.375 C 13.246094 6.613281 14.25 6 16 6 Z "></path>
            </g>
            </svg>`,
        name: "Windows Defender Security Center",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}ms-wpc:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
            <g id="surface1">
            <path d="M 9 6 C 6.25 6 4 8.25 4 11 C 4 12.515625 4.707031 13.863281 5.78125 14.78125 C 3.542969 15.953125 2 18.316406 2 21 L 4 21 C 4 18.246094 6.246094 16 9 16 C 10.382813 16 11.5 16.476563 12.375 17.34375 C 12.140625 17.851563 12 18.410156 12 19 C 12 20.113281 12.476563 21.117188 13.21875 21.84375 C 11.886719 22.746094 11 24.285156 11 26 L 13 26 C 13 24.34375 14.34375 23 16 23 C 17.65625 23 19 24.34375 19 26 L 21 26 C 21 24.285156 20.113281 22.746094 18.78125 21.84375 C 19.523438 21.117188 20 20.113281 20 19 C 20 18.410156 19.859375 17.851563 19.625 17.34375 C 20.5 16.476563 21.617188 16 23 16 C 25.753906 16 28 18.246094 28 21 L 30 21 C 30 18.316406 28.457031 15.953125 26.21875 14.78125 C 27.292969 13.863281 28 12.515625 28 11 C 28 8.25 25.75 6 23 6 C 20.25 6 18 8.25 18 11 C 18 12.515625 18.707031 13.863281 19.78125 14.78125 C 19.265625 15.050781 18.804688 15.417969 18.375 15.8125 C 17.707031 15.308594 16.894531 15 16 15 C 15.105469 15 14.292969 15.308594 13.625 15.8125 C 13.195313 15.417969 12.734375 15.050781 12.21875 14.78125 C 13.292969 13.863281 14 12.515625 14 11 C 14 8.25 11.75 6 9 6 Z M 9 8 C 10.667969 8 12 9.332031 12 11 C 12 12.667969 10.667969 14 9 14 C 7.332031 14 6 12.667969 6 11 C 6 9.332031 7.332031 8 9 8 Z M 23 8 C 24.667969 8 26 9.332031 26 11 C 26 12.667969 24.667969 14 23 14 C 21.332031 14 20 12.667969 20 11 C 20 9.332031 21.332031 8 23 8 Z M 16 17 C 17.117188 17 18 17.882813 18 19 C 18 20.117188 17.117188 21 16 21 C 14.882813 21 14 20.117188 14 19 C 14 17.882813 14.882813 17 16 17 Z "></path>
            </g>
            </svg>`,
        name: "Windows Parental Controls",
    },
    {
        executionArgument: `${WindowsSettingsHelpers.windowsSettingsPrefix}xbox:`,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1">
                    <g id="surface1">
                        <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 16.09375 6 16.1875 6.027344 16.28125 6.03125 C 16.535156 6.039063 16.78125 6.039063 17.03125 6.0625 C 17.0625 6.066406 17.09375 6.058594 17.125 6.0625 C 17.21875 6.074219 17.3125 6.082031 17.40625 6.09375 C 17.46875 6.101563 17.53125 6.113281 17.59375 6.125 C 17.980469 6.1875 18.347656 6.269531 18.71875 6.375 C 19.109375 6.484375 19.507813 6.625 19.875 6.78125 C 19.882813 6.785156 19.898438 6.777344 19.90625 6.78125 C 20.070313 6.851563 20.21875 6.953125 20.375 7.03125 C 20.582031 7.132813 20.800781 7.226563 21 7.34375 C 21.054688 7.375 21.105469 7.40625 21.15625 7.4375 C 21.222656 7.460938 21.304688 7.511719 21.40625 7.59375 C 21.410156 7.597656 21.402344 7.621094 21.40625 7.625 C 19.757813 6.675781 16.03125 9.6875 16.03125 9.6875 C 14.554688 8.558594 13.214844 7.792969 12.21875 7.53125 C 11.570313 7.367188 11.078125 7.402344 10.75 7.53125 C 10.910156 7.429688 11.050781 7.308594 11.21875 7.21875 C 11.230469 7.210938 11.238281 7.195313 11.25 7.1875 C 11.503906 7.042969 11.765625 6.929688 12.03125 6.8125 C 12.050781 6.804688 12.074219 6.789063 12.09375 6.78125 C 12.28125 6.699219 12.464844 6.628906 12.65625 6.5625 C 12.828125 6.5 13.011719 6.457031 13.1875 6.40625 C 13.445313 6.332031 13.703125 6.242188 13.96875 6.1875 C 14.050781 6.171875 14.136719 6.171875 14.21875 6.15625 C 14.433594 6.117188 14.652344 6.085938 14.875 6.0625 C 14.90625 6.058594 14.9375 6.066406 14.96875 6.0625 C 15.304688 6.027344 15.652344 6 16 6 Z M 22 8.59375 C 22.292969 8.59375 22.636719 8.65625 22.9375 8.84375 C 22.976563 8.878906 23.027344 8.902344 23.0625 8.9375 C 23.117188 8.984375 23.167969 9.035156 23.21875 9.09375 C 23.359375 9.238281 23.496094 9.378906 23.625 9.53125 C 23.652344 9.566406 23.691406 9.589844 23.71875 9.625 C 23.796875 9.71875 23.863281 9.808594 23.9375 9.90625 C 24.058594 10.066406 24.167969 10.238281 24.28125 10.40625 C 24.460938 10.671875 24.628906 10.933594 24.78125 11.21875 C 24.925781 11.480469 25.070313 11.753906 25.1875 12.03125 C 25.195313 12.050781 25.210938 12.074219 25.21875 12.09375 C 25.25 12.167969 25.28125 12.238281 25.3125 12.3125 C 25.402344 12.542969 25.488281 12.792969 25.5625 13.03125 C 25.660156 13.34375 25.746094 13.644531 25.8125 13.96875 C 25.820313 14.011719 25.835938 14.050781 25.84375 14.09375 C 25.960938 14.707031 26 15.351563 26 16 C 26 18.421875 25.144531 20.648438 23.71875 22.375 C 23.636719 22.472656 23.554688 22.5625 23.46875 22.65625 C 23.945313 20.140625 23.070313 18.285156 21.65625 15.96875 C 20.179688 13.621094 17.84375 11.3125 17.84375 11.3125 C 19.925781 9.355469 21.652344 8.722656 22 8.59375 Z M 9.875 8.65625 C 10.527344 8.699219 11.203125 8.953125 11.8125 9.34375 L 11.875 9.375 C 13.175781 10.15625 14.21875 11.3125 14.21875 11.3125 C 13.089844 12.398438 10.378906 15.6875 9.46875 17.90625 C 8.125 21.296875 8.75 22.78125 8.75 22.78125 C 8.921875 20.910156 11.691406 17.605469 12.6875 16.5625 C 13.207031 15.953125 14.21875 14.96875 15 14.1875 C 15.5625 13.578125 16.03125 13.09375 16.03125 13.09375 C 16.335938 13.398438 16.644531 13.707031 16.90625 13.96875 C 18.164063 15.230469 19.101563 16.230469 19.75 16.96875 C 20.402344 17.707031 21.539063 19.097656 21.84375 19.53125 C 23.148438 21.386719 23.394531 22.644531 23.40625 22.71875 C 23.296875 22.839844 23.179688 22.945313 23.0625 23.0625 C 22.835938 23.289063 22.621094 23.515625 22.375 23.71875 C 22.128906 23.921875 21.859375 24.101563 21.59375 24.28125 C 21.328125 24.460938 21.066406 24.628906 20.78125 24.78125 C 20.5625 24.898438 20.351563 25.023438 20.125 25.125 C 20.082031 25.144531 20.042969 25.167969 20 25.1875 C 19.726563 25.304688 19.441406 25.40625 19.15625 25.5 C 19.132813 25.507813 19.117188 25.523438 19.09375 25.53125 C 18.835938 25.613281 18.578125 25.6875 18.3125 25.75 C 18.21875 25.773438 18.128906 25.792969 18.03125 25.8125 C 17.839844 25.851563 17.632813 25.847656 17.4375 25.875 C 16.980469 25.941406 16.507813 26 16.03125 26 C 15.675781 26 15.3125 25.972656 14.96875 25.9375 C 14.308594 25.867188 13.675781 25.753906 13.0625 25.5625 C 13.054688 25.558594 13.039063 25.566406 13.03125 25.5625 C 12.105469 25.269531 11.226563 24.816406 10.4375 24.28125 C 10.429688 24.277344 10.414063 24.285156 10.40625 24.28125 C 9.882813 23.925781 9.414063 23.507813 8.96875 23.0625 C 7.164063 21.253906 6.0625 18.761719 6.0625 16 C 6.0625 13.347656 7.101563 10.96875 8.75 9.1875 C 8.75 9.1875 9.179688 8.65625 9.875 8.65625 Z "></path>
                    </g>
                </svg>`,
        name: "Xbox",
    },
] as SearchResultItem[];

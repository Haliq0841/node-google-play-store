/**
 * Copyright 2022 GoneTone
 *
 * Google Play API (Unofficial Node.js Library)
 * https://github.com/GoneToneStudio/node-google-play-api
 *
 * @author   張文相 Wenxiang Zhang (旋風之音 GoneTone) <https://blog.reh.tw>
 * @license  MIT <https://github.com/GoneToneStudio/node-google-play-api/blob/master/LICENSE>
 */
import type { IAndroidAppDeliveryData, IAppFileMetadata, IBuyResponse, IDeliveryResponse, IItem, ISplitDeliveryData } from '../proto/google_play';
export declare class GooglePlayAPI {
    private readonly _email;
    private readonly _gsfID;
    private readonly _apiEndpoint;
    private readonly _authPath;
    private readonly _playApiPath;
    private _userAgent;
    private _clientID;
    private readonly _googlePlayServiceVersion;
    private _sdkVersion;
    private readonly _callerSig;
    private readonly _callerPkg;
    private _countryCode;
    private _languageCode;
    private readonly _enabledExperiments;
    private readonly _unsupportedExperiments;
    private _axiosConfigForGooglePlay;
    private _axiosConfigForGooglePlay_Protobuf;
    private readonly _axiosConfig;
    /**
     * GooglePlayAPI constructor.
     *
     * @param {string} email Google Mail
     * @param {string} gsfID GSF ID (Google Service Framework ID)
     */
    constructor(email: string, gsfID: string);
    /**
     * Set User-Agent
     *
     * @param {string} userAgent User-Agent
     */
    setUserAgent(userAgent: string): void;
    /**
     * Set Client ID
     *
     * @param {string} clientID Client ID
     */
    setClientID(clientID: string): void;
    /**
     * Set SDK Version
     *
     * @param {number} sdkVersion SDK Version
     */
    setSdkVersion(sdkVersion: number): void;
    /**
     * Set Country Code
     *
     * @param {string} countryCode Country Code
     */
    setCountryCode(countryCode: string): void;
    /**
     * Set Language Code
     *
     * @param {string} languageCode Language Code
     */
    setLanguageCode(languageCode: string): void;
    /**
     * Get Google Token
     *
     * @param {string} oauth2Token OAuth2 Token
     * @param {string} saveTokenFilePath Save OAuth2 Token Path (default token.txt)
     *
     * @returns {Promise<string>}
     */
    getGoogleToken(oauth2Token: string, saveTokenFilePath?: string): Promise<string>;
    /**
     * Google Auth
     *
     * @param {string} token Token
     */
    googleAuth(token: string): Promise<void>;
    /**
     * Get App Details
     *
     * @param {string} packageName App Package Name
     *
     * @returns {Promise<IItem | null | undefined>}
     */
    appDetails(packageName: string): Promise<IItem | null | undefined>;
    /**
     * Get Bulk Details
     *
     * @param {string[]} packages App Packages
     *
     * @returns {Promise<IItem[] | null | undefined>}
     */
    bulkDetails(...packages: string[]): Promise<IItem[] | null | undefined>;
    /**
     * App Search
     *
     * @param {string} keyword Search Keyword
     *
     * @returns {Promise<IItem[] | null | undefined>}
     */
    search(keyword: string): Promise<IItem[] | null | undefined>;
    /**
     * Get App Delivery
     *
     * @param {string} packageName App Package Name
     * @param {number} offerType Offer Type
     * @param {number} versionCode App Version Code
     *
     * @returns {Promise<IDeliveryResponse | null | undefined>}
     */
    appDelivery(packageName: string, offerType: number, versionCode: number): Promise<IDeliveryResponse | null | undefined>;
    /**
     * Make Purchase Request
     *
     * @param {string} packageName App Package Name
     * @param {number} offerType Offer Type
     * @param {number} versionCode App Version Code
     *
     * @returns {Promise<IBuyResponse | null | undefined>}
     */
    purchase(packageName: string, offerType: number, versionCode: number): Promise<IBuyResponse | null | undefined>;
    /**
     * Get Download Info
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<IAndroidAppDeliveryData | null>}
     */
    downloadInfo(packageName: string, versionCode?: number | null | undefined): Promise<IAndroidAppDeliveryData | null>;
    /**
     * Get Download Apk Url
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<string | null | undefined>}
     */
    downloadApkUrl(packageName: string, versionCode?: number | null): Promise<string | null | undefined>;
    /**
     * Download Apk
     *
     * @param {string} packageName App Package Name
     * @param {string} outputPath Output Save Path
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     * @param {string | null} outputFileName Output File Save Name (Default App Package Name)
     *
     * @returns {Promise<boolean>}
     */
    downloadApk(packageName: string, outputPath: string, versionCode?: number | null, outputFileName?: string | null): Promise<boolean>;
    /**
     * Get Split Delivery Data Info
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<ISplitDeliveryData[] | null | undefined>}
     */
    splitDeliveryDataInfo(packageName: string, versionCode?: number | null): Promise<ISplitDeliveryData[] | null | undefined>;
    /**
     * Get Download Split Apks Name And Url
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<{name: string | null | undefined, downloadUrl: string | null | undefined}[]>}
     */
    downloadSplitApksNameAndUrl(packageName: string, versionCode?: number | null): Promise<{
        name: string | null | undefined;
        downloadUrl: string | null | undefined;
    }[]>;
    /**
     * Download Split Apks
     *
     * @param {string} packageName App Package Name
     * @param {string} outputPath Output Save Path
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     * @param {string | null} outputFileNamePrefixe Output File Save Name Prefixe (Default App Package Name)
     *
     * @returns {Promise<boolean>}
     */
    downloadSplitApks(packageName: string, outputPath: string, versionCode?: number | null, outputFileNamePrefixe?: string | null): Promise<boolean>;
    /**
     * Get Additional File Info
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<IAppFileMetadata[] | null | undefined>}
     */
    additionalFileInfo(packageName: string, versionCode?: number | null): Promise<IAppFileMetadata[] | null | undefined>;
    /**
     * Get Download Additional File Urls
     *
     * @param {string} packageName App Package Name
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     *
     * @returns {Promise<string[] | null | undefined>}
     */
    downloadAdditionalFileUrls(packageName: string, versionCode?: number | null): Promise<string[] | null | undefined>;
    /**
     * Download Additional Files
     *
     * @param {string} packageName App Package Name
     * @param {string} outputPath Output Save Path
     * @param {number | null} versionCode App Version Code (Default Latest Version Code)
     * @param {string | null} outputFileName Output File Save Name (Default App Package Name)
     *
     * @returns {Promise<boolean>}
     */
    downloadAdditionalFiles(packageName: string, outputPath: string, versionCode?: number | null, outputFileName?: string | null): Promise<boolean>;
}

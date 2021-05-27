declare const styles: {
    container: {
        flex: number;
        flexDirection: "column";
    };
    tabHeader: {
        position: "relative";
        height: number;
        width: string;
        backgroundColor: string;
    };
    tabScrollContainer: {
        flexDirection: "column";
        width: string;
    };
    tabButtonList: {
        flexDirection: "row";
    };
    tabButton: {
        paddingHorizontal: number;
        height: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
    };
    tabButtonActive: {};
    tabButtonText: {
        color: string;
        fontSize: number;
        height: number;
        lineHeight: number;
    };
    tabButtonTextActive: {
        color: string;
        fontWeight: "bold";
    };
    tabBarContainer: {
        position: "absolute";
        flexDirection: "row";
        width: string;
        height: number;
        justifyContent: "center";
        alignItems: "flex-end";
        zIndex: number;
        bottom: number;
    };
    tabBarLine: {
        backgroundColor: string;
        width: string;
        height: number;
    };
    tabBar: {
        position: "absolute";
        backgroundColor: string;
        height: number;
        width: number;
        left: number;
    };
};
export default styles;
//# sourceMappingURL=styles.d.ts.map
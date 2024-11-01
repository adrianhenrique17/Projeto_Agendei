import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight:20,
        paddingTop: 30,
        justifyContent: "space-between",
        marginBottom:20
        
    },
    theme: {
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: COLORS.white,
        arrowColor: COLORS.blue,
        

    },
    textHour: {
            fontSize: FONT_SIZE.lg,
            fontWeight: "bold",
            color: COLORS.gray2,
            marginTop: 20

    }
}
    
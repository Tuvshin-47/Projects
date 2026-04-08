public class JavaSwitch {
    // Тоо өгөөд тухайн тоогоор гаригийг нь олдог функц бичье

    static String findWeekName(int weekDay) {
        String weekDayName = "";
        switch (weekDay) {
            case 1:
                weekDayName = "Monday";
                break;
            case 2:
                weekDayName = "Tuesday";
                break;
            case 3:
                weekDayName = "Wednesday";
                break;
            case 4:
                weekDayName = "Thursday";
                break;
            case 5:
                weekDayName = "Friday";
                break;
            case 6:
                weekDayName = "Saturday";
                break;
            case 7:
                weekDayName = "Sunday";
                break;
            default:
                weekDayName = "There is no week name for this";
                break;
        }

        return weekDayName;
    }

    public static void main(String[] args) {
        int a = -1;
        System.out.println(findWeekName(a));
    }
}

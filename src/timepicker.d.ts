import {View, Property, EventData} from "tns-core-modules/ui/core/view";

export class TimePicker extends View {
    static tapEvent: string;

    // Defines the text property.
    text: string;

    // Overload 'on' method so that it provides intellisense for 'tap' event.
    on(event: "tap", callback: (args: EventData) => void, thisArg?: any);

    // Needed when 'on' method is overriden.
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);

    /**
     * Gets the native [android.widget.TimePicker](http://developer.android.com/reference/android/widget/TimePicker.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.widget.TimePicker */;

    /**
     * Gets the native iOS [UIDatePicker](http://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIDatePicker_Class/index.html) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UIDatePicker */;

    /**
     * Gets or sets the time hour.
     */
    hour: number;

    /**
     * Gets or sets the time minute.
     */
    minute: number;

    /**
     * Gets or sets the time.
     */
    time: Date;

    /**
     * Gets or sets the max time hour.
     */
    maxHour: number;

    /**
     * Gets or sets the max time minute.
     */
    maxMinute: number;

    /**
     * Gets or sets the min time hour.
     */
    minHour: number;

    /**
     * Gets or sets the min time minute.
     */
    minMinute: number;

    /**
     * Gets or sets the minute interval.
     */
    minuteInterval: number;
}

export const hourProperty: Property<TimePicker, number>;
export const maxHourProperty: Property<TimePicker, number>;
export const minHourProperty: Property<TimePicker, number>;

export const minuteProperty: Property<TimePicker, number>;
export const maxMinuteProperty: Property<TimePicker, number>;
export const minMinuteProperty: Property<TimePicker, number>;

export const timeProperty: Property<TimePicker, Date>;
export const minuteIntervalProperty: Property<TimePicker, number>;
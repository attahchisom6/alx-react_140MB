import { * as notifications } from "../notifications.json";

const getAllNotificationsByUser = (userId) => {
    return notifications.filter(value => value.id === userId)
        .filter(obj => obj.context);
        
}
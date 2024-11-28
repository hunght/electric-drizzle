import * as clients from "./schemas/clients"
import * as activities from "./schemas/activities"

export const schema = {
    ...clients,
    ...activities
}
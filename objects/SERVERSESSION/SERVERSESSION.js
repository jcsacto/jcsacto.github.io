mos = {
    "objectName": "SERVERSESSION",
    "className": "psdi.app.signature.ServerSessionSet",
    "description": "Information about MXServer sessions",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SERVERSESSIONID",
    "primaryKeyColumns": [
        "TENANTID",
        "SERVERSESSIONID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SERVERHOST",
            "required": true,
            "persistent": true,
            "title": "Server Host",
            "remarks": "Host name or IP Address of the MXServer for this session",
            "sameAsAttribute": "SERVERHOST",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERNAME",
            "required": true,
            "persistent": true,
            "title": "Server",
            "remarks": "MXServer Name",
            "sameAsAttribute": "SERVERNAME",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "RELOADCACHE",
            "required": false,
            "persistent": true,
            "title": "Reload Cache",
            "remarks": "If this is a system connection, then reloadcache specifies which cache objects need to be reloaded (if any)",
            "sameAsAttribute": "RELOADCACHE",
            "sameAsObject": "MAXSESSION"
        },
        {
            "attributeName": "SERVERTIMESTAMP",
            "required": false,
            "persistent": true,
            "title": "Server Timestamp",
            "remarks": "Timestamp of the Application Server to make sure the Application Server is running",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the server session is active",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TENANTID",
            "required": true,
            "persistent": true,
            "title": "Tenant ID",
            "remarks": "ID of the tenant",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERVERSESSIONID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REGISTRYPORT",
            "required": false,
            "persistent": true,
            "title": "Registry Port",
            "remarks": "Registry Port",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}
mos = {
    "objectName": "SERVICEOBJECT",
    "className": "psdi.util.logging.ServiceObjectSet",
    "description": "A simple view to hold the list of SERVICENAME and SERVICENAME.OBJECTNAME",
    "longDescription": null,
    "isView": true,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "SERVICEOBJECT"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SERVICEOBJECT",
            "required": true,
            "persistent": true,
            "title": "Service or Service Object",
            "remarks": "This is either a [SERVICENAME], or [SERVICENAME.OBJECTNAME]",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "SERVICEOBJECT",
            "tableName": "MAXSERVICE",
            "tableColumnName": "SERVICENAME"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": true,
            "persistent": true,
            "title": "Description",
            "remarks": "Description of the service or object",
            "sameAsAttribute": null,
            "sameAsObject": null,
            "viewColumnName": "DESCRIPTION",
            "tableName": "MAXOBJECT",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "MAXSERVICEID",
            "required": false,
            "persistent": true,
            "title": "maxservice id",
            "remarks": "maxservice id",
            "sameAsAttribute": "MAXSERVICEID",
            "sameAsObject": "MAXSERVICE",
            "viewColumnName": "MAXSERVICEID",
            "tableName": "MAXSERVICE",
            "tableColumnName": "MAXSERVICEID"
        },
        {
            "attributeName": "MAXOBJECTID",
            "required": false,
            "persistent": true,
            "title": "maxobject id",
            "remarks": "maxobject id",
            "sameAsAttribute": "MAXOBJECTID",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "MAXOBJECTID",
            "tableName": "MAXOBJECT",
            "tableColumnName": "MAXOBJECTID"
        },
        {
            "attributeName": "SERVICEDESC",
            "required": false,
            "persistent": true,
            "title": "service description",
            "remarks": "service description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXSERVICE",
            "viewColumnName": "SERVICEDESC",
            "tableName": "MAXSERVICE",
            "tableColumnName": "DESCRIPTION"
        },
        {
            "attributeName": "DISPLAYDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "MAXOBJECT"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "maxobject.servicename=maxservice.servicename",
        "viewselect": "select servicename as serviceobject, description as servicedesc, cast(null as varchar(100)) as description, maxserviceid as maxserviceid, 0 as maxobjectid from maxservice union all select distinct maxservice.servicename + '.' + maxobject.objectname as serviceobject,  cast(null as varchar(100)) as servicedesc, maxobject.description as description, 0 as maxserviceid, maxobject.maxobjectid as maxobjectid",
        "viewfrom": "maxservice,maxobject"
    },
    "outgoingRelationships": [],
    "incomingRelationships": []
}
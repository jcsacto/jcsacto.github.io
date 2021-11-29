mos = {
    "objectName": "LBSCREWVIEW",
    "className": "com.ibm.tivoli.maximo.map.LBSCrewViewSet",
    "description": "Add view for tables LBSLOCATION AMCREW",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "AMCREW",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LBSCREWVIEW",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "REFOBJECT",
            "required": true,
            "persistent": true,
            "title": "Reference Object",
            "remarks": "Reference Object",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT",
            "viewColumnName": "REFOBJECT",
            "tableName": "LBSLOCATION",
            "tableColumnName": "REFOBJECT"
        },
        {
            "attributeName": "KEY1",
            "required": true,
            "persistent": true,
            "title": "KEY1",
            "remarks": "first key",
            "sameAsAttribute": "KEY1",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "KEY1",
            "tableName": "LBSLOCATION",
            "tableColumnName": "KEY1"
        },
        {
            "attributeName": "KEY2",
            "required": false,
            "persistent": true,
            "title": "KEY2",
            "remarks": "second key",
            "sameAsAttribute": "KEY2",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "KEY2",
            "tableName": "LBSLOCATION",
            "tableColumnName": "KEY2"
        },
        {
            "attributeName": "LONGITUDE",
            "required": false,
            "persistent": true,
            "title": "Longitude",
            "remarks": "Longitude",
            "sameAsAttribute": "LONGITUDE",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "LONGITUDE",
            "tableName": "LBSLOCATION",
            "tableColumnName": "LONGITUDE"
        },
        {
            "attributeName": "LATITUDE",
            "required": false,
            "persistent": true,
            "title": "Latitude",
            "remarks": "Latitude",
            "sameAsAttribute": "LATITUDE",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "LATITUDE",
            "tableName": "LBSLOCATION",
            "tableColumnName": "LATITUDE"
        },
        {
            "attributeName": "ALTITUDE",
            "required": false,
            "persistent": true,
            "title": "Altitude",
            "remarks": "Altitude",
            "sameAsAttribute": "ALTITUDE",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "ALTITUDE",
            "tableName": "LBSLOCATION",
            "tableColumnName": "ALTITUDE"
        },
        {
            "attributeName": "LOCATIONACCURACY",
            "required": false,
            "persistent": true,
            "title": "Accuracy",
            "remarks": "Accuracy",
            "sameAsAttribute": "LOCATIONACCURACY",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "LOCATIONACCURACY",
            "tableName": "LBSLOCATION",
            "tableColumnName": "LOCATIONACCURACY"
        },
        {
            "attributeName": "ALTITUDEACCURACY",
            "required": false,
            "persistent": true,
            "title": "Altitude accuracy",
            "remarks": "Altitude accuracy",
            "sameAsAttribute": "ALTITUDEACCURACY",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "ALTITUDEACCURACY",
            "tableName": "LBSLOCATION",
            "tableColumnName": "ALTITUDEACCURACY"
        },
        {
            "attributeName": "HEADING",
            "required": false,
            "persistent": true,
            "title": "Heading",
            "remarks": "Heading",
            "sameAsAttribute": "HEADING",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "HEADING",
            "tableName": "LBSLOCATION",
            "tableColumnName": "HEADING"
        },
        {
            "attributeName": "SPEED",
            "required": false,
            "persistent": true,
            "title": "Speed",
            "remarks": "Speed",
            "sameAsAttribute": "SPEED",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "SPEED",
            "tableName": "LBSLOCATION",
            "tableColumnName": "SPEED"
        },
        {
            "attributeName": "LASTUPDATE",
            "required": false,
            "persistent": true,
            "title": "Location Timestamp",
            "remarks": "Location Timestamp",
            "sameAsAttribute": "LASTUPDATE",
            "sameAsObject": "LBSLOCATION",
            "viewColumnName": "LASTUPDATE",
            "tableName": "LBSLOCATION",
            "tableColumnName": "LASTUPDATE"
        },
        {
            "attributeName": "AMCREWID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": "AMCREWID",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREWID",
            "tableName": "AMCREW",
            "tableColumnName": "AMCREWID"
        },
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Identfies the crew. This value must be unique within an organization.",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREW",
            "tableName": "AMCREW",
            "tableColumnName": "AMCREW"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization to which the crew belongs.The default value is the organization associated with the user's insert site.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "AMCREW",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "Identifies the crew's shift. When you select a calendar value for the crew, Maximo also enters that value in the Shift field.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT",
            "viewColumnName": "SHIFTNUM",
            "tableName": "AMCREW",
            "tableColumnName": "SHIFTNUM"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "lbs.refobject = 'AMCREW' and cr.status in (select value from synonymdomain where domainid = 'CREWSTATUS' and maxvalue ='ACTIVE')",
        "viewselect": " lbs.refobject,lbs.key1,lbs.key2,lbs.longitude,lbs.latitude,lbs.altitude,lbs.locationaccuracy,lbs.altitudeaccuracy,lbs.heading,lbs.speed,lbs.lastupdate,cr.amcrewid,cr.amcrew,cr.orgid,cr.shiftnum",
        "viewfrom": " lbslocation lbs left join amcrew cr on  lbs.key1 = cr.orgid and lbs.key2 = cr.amcrew  "
    },
    "outgoingRelationships": [
        {
            "name": "AMCREW",
            "target": "AMCREW",
            "remarks": "Relationship to find the amcrew from an lbscrewview",
            "whereClause": "orgid = :key1 and amcrew = :key2",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}
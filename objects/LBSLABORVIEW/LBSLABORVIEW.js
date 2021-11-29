mos = {
    "objectName": "LBSLABORVIEW",
    "className": "com.ibm.tivoli.maximo.map.LBSLaborViewSet",
    "description": "Add view for tables LBSLOCATION LABOR AMCREWLABOR",
    "longDescription": null,
    "isView": true,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [
        "LABORCODE",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "AMCREW",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID, AMCREW",
            "targetKeys": "ORGID, AMCREW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew",
            "longDescription": null
        },
        {
            "objectName": "LABOR",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID, LABORCODE",
            "targetKeys": "ORGID, LABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "REFOBJECT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reference Object",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LBSLABORVIEW",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LBSLABORVIEW",
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
            "attributeName": "LABORID",
            "required": true,
            "persistent": true,
            "title": "LABORID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": "LABORID",
            "sameAsObject": "LABOR",
            "viewColumnName": "LABORID",
            "tableName": "LABOR",
            "tableColumnName": "LABORID"
        },
        {
            "attributeName": "LABORCODE",
            "required": true,
            "persistent": true,
            "title": "Labor",
            "remarks": "Identifier of the labor record.  This field must be unique within an organization. When you save a labor record, this field becomes read-only.",
            "sameAsAttribute": "LABORCODE",
            "sameAsObject": "LABOR",
            "viewColumnName": "LABORCODE",
            "tableName": "LABOR",
            "tableColumnName": "LABORCODE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "The name of the organization that is associated with this labor code.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION",
            "viewColumnName": "ORGID",
            "tableName": "LABOR",
            "tableColumnName": "ORGID"
        },
        {
            "attributeName": "AMCREW",
            "required": true,
            "persistent": true,
            "title": "Crew",
            "remarks": "Crew Id",
            "sameAsAttribute": "AMCREW",
            "sameAsObject": "AMCREW",
            "viewColumnName": "AMCREW",
            "tableName": "AMCREWLABOR",
            "tableColumnName": "AMCREW"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "The shift record associated with this person.",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT",
            "viewColumnName": "SHIFTNUM",
            "tableName": "PERSONCAL",
            "tableColumnName": "SHIFTNUM"
        }
    ],
    "viewinfo": {
        "autosect": false,
        "viewwhere": "lbs.refobject = 'LABOR' and lb.status in (select value from synonymdomain where domainid = 'LABORSTATUS' and maxvalue ='ACTIVE')",
        "viewselect": " lbs.refobject,lbs.key1,lbs.key2,lbs.longitude,lbs.latitude,lbs.altitude,lbs.locationaccuracy,lbs.altitudeaccuracy,lbs.heading,lbs.speed,lbs.lastupdate,lb.laborid,lb.laborcode,lb.orgid,am.amcrew,am.effectivedate,am.enddate,p.shiftnum",
        "viewfrom": " lbslocation lbs left join labor lb on  lbs.key1 = lb.orgid and lbs.key2 =lb.laborcode left join amcrewlabor am on lb.laborcode = am.laborcode and lb.orgid = am.orgid  left join personcal p on lb.laborcode = p.personid and lb.orgid = p.orgid"
    },
    "outgoingRelationships": [
        {
            "name": "LABOR",
            "target": "LABOR",
            "remarks": "Relationship to find the labor from an lbslaborview",
            "whereClause": "orgid = :key1 and laborcode = :key2",
            "cardinality": null
        }
    ],
    "incomingRelationships": []
}
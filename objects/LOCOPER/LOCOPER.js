mos = {
    "objectName": "LOCOPER",
    "className": "psdi.app.location.LocOperSet",
    "description": "The Functional Location Information Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "LOCOPERID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CALENDAR",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, CALNUM",
            "targetKeys": "ORGID, CALNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location''s Calendar",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "ITEM",
            "targetObject": "LOCOPER",
            "parentKeys": "ITEMNUM, ITEMSETID",
            "targetKeys": "ITEMNUM, ITEMSETID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Item",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCOPER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Operation Location details",
            "longDescription": null
        },
        {
            "objectName": "METERGROUP",
            "targetObject": "LOCOPER",
            "parentKeys": "GROUPNAME",
            "targetKeys": "GROUPNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter Group",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "SETS",
            "targetObject": "LOCOPER",
            "parentKeys": "SETID",
            "targetKeys": "ITEMSETID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "SHIFT",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, SHIFTNUM",
            "targetKeys": "ORGID, SHIFTNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Shift",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCOPER",
            "parentKeys": "SITEID",
            "targetKeys": "SITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Site for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "LOCATION",
            "required": true,
            "persistent": true,
            "title": "Location",
            "remarks": "Functional Location ID",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": true,
            "title": "Calendar",
            "remarks": "Location Calendar",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "LOCPRIORITY",
            "required": false,
            "persistent": true,
            "title": "Priority",
            "remarks": "Location Priority",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": true,
            "title": "Item",
            "remarks": "Inventory Item Number",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": true,
            "title": "Failure Class",
            "remarks": "Indicates top level failure hierarchy for the location",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "CLASSIFICATION",
            "required": false,
            "persistent": true,
            "title": "Classification",
            "remarks": "Location Asset Classification",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FLO1",
            "required": false,
            "persistent": true,
            "title": "Flo1",
            "remarks": "Functional Location Extra Field #1",
            "sameAsAttribute": "WOLO1",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO2",
            "required": false,
            "persistent": true,
            "title": "Flo2",
            "remarks": "Functional Location Extra Field #2",
            "sameAsAttribute": "WOLO2",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO3",
            "required": false,
            "persistent": true,
            "title": "Flo3",
            "remarks": "Functional Location Extra Field #3",
            "sameAsAttribute": "WOLO3",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO4",
            "required": false,
            "persistent": true,
            "title": "Flo4",
            "remarks": "Functional Location Extra Field #4",
            "sameAsAttribute": "WOLO4",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO5",
            "required": false,
            "persistent": true,
            "title": "Flo5",
            "remarks": "Functional Location Extra Field #5",
            "sameAsAttribute": "WOLO5",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO6",
            "required": false,
            "persistent": true,
            "title": "Flo6",
            "remarks": "Functional Location Extra Field #6",
            "sameAsAttribute": "WOLO6",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO7",
            "required": false,
            "persistent": true,
            "title": "Flo7",
            "remarks": "Functional Location Extra Field #7",
            "sameAsAttribute": "WOLO7",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO8",
            "required": false,
            "persistent": true,
            "title": "Flo8",
            "remarks": "Functional Location Extra Field #8",
            "sameAsAttribute": "WOLO8",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO9",
            "required": false,
            "persistent": true,
            "title": "Flo9",
            "remarks": "Functional Location Extra Field #9",
            "sameAsAttribute": "WOLO9",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "FLO10",
            "required": false,
            "persistent": true,
            "title": "Flo10",
            "remarks": "Functional Location Extra Field #10",
            "sameAsAttribute": "WOLO10",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "WARRANTYEXPDATE",
            "required": false,
            "persistent": true,
            "title": "Warranty Date",
            "remarks": "Date that the manufacturers warranty expires for this location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": true,
            "persistent": true,
            "title": "Site",
            "remarks": "Site Identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": true,
            "title": "Item Set",
            "remarks": "Item set identifier for this item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": true,
            "title": "Shift",
            "remarks": "shiftnum field of LocOper table",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": true,
            "title": "Group",
            "remarks": "All meters belonging to this locoper's metergroup are automatically associated with this LocOper's Location in the LocationMeter object.  Additions to the meter group can also be added to this LocOper's Location in the LocationMeter object.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "LOCOPERID",
            "required": true,
            "persistent": true,
            "title": "LOCOPERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table, used to find the rotating item at the operating location. (locoper.itemnum=item.itemnum and item.itemsetid = locoper.itemsetid). The resulting set will contain zero or one object.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOC_ITEM",
            "target": "ITEM",
            "remarks": null,
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find all item assembly structure records for the rotating item at the location. (locoper.itemnum=itemstruct.itemnum and itemstruct.itemsetid = locoper.itemsetid). The resulting set will contain zero or more objects. If records are found, it indicates that the rotating item belongs to some item assembly structures.",
            "whereClause": "itemnum=:itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSTRUCTID",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the child item assembly structure records for the rotating item at thelocation. (locoper.itemnum=itemstruct.itemid and locoper.itemnum = itemstruct.parent and itemstruct.itemsetid = locoper.itemsetid). The resulting set will contain zero or more objects. If records are found, it indicates that the rotating item is a top-level item and have its own assembly structure.",
            "whereClause": "itemid=:itemnum and parent = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to find the LocationMeter objects associated with this LocOper's location and siteid. The WHERE clause is: locationmeter.location = locoper.location and locationmeter.siteid = locoper.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "target": "LOCATIONS",
            "remarks": "Relationship to Locations table, used to find the location record (locoper.location=locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMS",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the master PM records which contain the operating location. (locoper.itemnum = pm.masterpmitemnum and pm.applymasterpmtoloc = :yes and pm.ismasterpm = :yes and pm.pmnum NOT IN (Select masterpm from PM where  location= locoper.location and pm.itemsetid = locoper.itemsetid)). The resulting set will contain zero or more objects.",
            "whereClause": "pmnum not in (select a.masterpm from pm a where a.location = :location and a.siteid=:siteid and a.masterpm=pmnum) and exists (select * from masterpm where applympmtoloc=:yes and itemnum=:itemnum and itemsetid=:itemsetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "LOCOPER",
            "source": "LOCATIONS",
            "remarks": " Relationship to the LocOper table, used to find information for a given operating location. (locations.location = locoper.location). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERATION_INFO",
            "source": "LOCATIONS",
            "remarks": null,
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCOPER",
            "source": "LOCSTATUS",
            "remarks": "Relationship to the LocOper table, used to find the operating location for a given LocStatus record. (locstatus.location=locoper.location). The resulting set will contain one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCLOC",
            "source": "MASTERPM",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated location records for this rotating item on Master PM record. (:applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and locoper.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applympmtoloc=:yes and itemnum =:itemnum and itemsetid = :itemsetid and :sitefiltering",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "METERGROUP",
            "remarks": "Relationship to the LocOper table, used to get the LocOpers associated with this MeterGroup. The WHERE clause is: locoper.groupname = metergroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCOPER",
            "source": "METERINGROUP",
            "remarks": "Relationship to the LocOper table, used to find the LocOper objects associated with this MeterInGroup's GroupName. The WHERE clause is: locoper.groupname = meteringroup.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSOCLOC",
            "source": "PM",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated location records for this rotating item on Master PM record. (:applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and locoper.itemsetid = pm.itemsetid). The resulting set will contain zero to many records.",
            "whereClause": ":applymasterpmtoloc=:yes and itemnum =:masterpmitemnum and location not in(select location from pm where masterpm=:pmnum and location is not null) and itemsetid = :itemsetid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOC",
            "source": "PM",
            "remarks": "Relationship to MasterPMItem's Location records, used to find all the associated active location records for a given PM. (locoper.location = pm.location and locoper.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (DECOMMISSIONED) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "location=:location and siteid=:siteid and location in (select location from locations where location=:location and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS'))",
            "cardinality": "UNDEFINED"
        }
    ]
}
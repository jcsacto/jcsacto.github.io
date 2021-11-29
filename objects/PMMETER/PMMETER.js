mos = {
    "objectName": "PMMETER",
    "className": "psdi.app.pm.PMMeterSet",
    "description": "PM Meter table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PMMETERID",
    "primaryKeyColumns": [
        "SITEID",
        "PMNUM",
        "METERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ASSET",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID, ASSETNUM",
            "targetKeys": "SITEID, ASSETNUM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 124",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "METER",
            "targetObject": "PMMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PMMETER",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PM",
            "targetObject": "PMMETER",
            "parentKeys": "SITEID, PMNUM",
            "targetKeys": "SITEID, PMNUM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter readings for the PM",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "PMMETER",
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
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "PMNUM",
            "required": true,
            "persistent": true,
            "title": "PM",
            "remarks": "Preventive maintenance Identifier",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": true,
            "title": "Asset",
            "remarks": "Asset Number",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": true,
            "title": "Location",
            "remarks": "Location Identifier",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
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
            "attributeName": "METERNAME",
            "required": true,
            "persistent": true,
            "title": "Meter",
            "remarks": "Meter Name",
            "sameAsAttribute": "METERNAME",
            "sameAsObject": "METER"
        },
        {
            "attributeName": "FREQUENCY",
            "required": false,
            "persistent": true,
            "title": "Frequency",
            "remarks": "Frequency",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ALERTLEAD",
            "required": false,
            "persistent": true,
            "title": "Alert Lead",
            "remarks": "Alert Lead (units)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UPDMETER",
            "required": true,
            "persistent": true,
            "title": "Update Meter",
            "remarks": "Update Meter",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "READINGATNEXTWO",
            "required": false,
            "persistent": true,
            "title": "Next Meter Reading",
            "remarks": "The reading when the next work order is projected to be generated. The PM is generated based on the value for the Life To Date field that is displayed on the Meters tab in the Assets application.",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "UNITSTOGO",
            "required": false,
            "persistent": false,
            "title": "Units to Go",
            "remarks": "Units To Go",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTPMWOGENREAD",
            "required": false,
            "persistent": true,
            "title": "Meter Reading",
            "remarks": "Meter Reading at Last work order generation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DATEOFNEXTWO",
            "required": false,
            "persistent": false,
            "title": "Estimated Next Due Date",
            "remarks": "If you selected the Use Last Work Order's Start Information to Calculate Next Due Date check box, it is the  date that is calculated by adding the frequency value to the meter reading that was obtained on the target start date of the last work order. If you did not select that check box, it is calculated by adding the frequency value that was obtained on the completion date of the last work order.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOLERANCE",
            "required": false,
            "persistent": true,
            "title": "Generate WO Ahead By",
            "remarks": "Tolearnce",
            "sameAsAttribute": "FREQUENCY",
            "sameAsObject": "PMMETER"
        },
        {
            "attributeName": "LASTPMWOGENREADDT",
            "required": false,
            "persistent": true,
            "title": "Meter Reading Date",
            "remarks": "Meter Reading Date at Last work order generation",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PMMETERID",
            "required": true,
            "persistent": true,
            "title": "PMMETERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVERAGE",
            "required": false,
            "persistent": false,
            "title": "Average Units/Day",
            "remarks": "Average units per day for this AssetMeter or LocationMeter",
            "sameAsAttribute": "AVERAGE",
            "sameAsObject": "ASSETMETER"
        },
        {
            "attributeName": "ROLLOVER",
            "required": false,
            "persistent": false,
            "title": "Rollover",
            "remarks": "Point at which the asset's (or) Location's meter returns to the its mininum value. Rollover applies to CONTINUOUS meters only.",
            "sameAsAttribute": "ROLLOVER",
            "sameAsObject": "METERINGROUP"
        },
        {
            "attributeName": "NEWREADINGATNXTWO",
            "required": false,
            "persistent": false,
            "title": "New Reading",
            "remarks": "New Reading entry used to update the Reading at Last WO",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "LTDREADATNEXTWO",
            "required": false,
            "persistent": true,
            "title": "LTD Next Meter Reading",
            "remarks": "Life to Date Next Meter Reading",
            "sameAsAttribute": "LASTPMWOGENREAD",
            "sameAsObject": "PMMETER"
        },
        {
            "attributeName": "LTDLASTPMWOREAD",
            "required": false,
            "persistent": true,
            "title": "Life to Date Meter Reading",
            "remarks": "Life to Date Meter Reading",
            "sameAsAttribute": "LASTPMWOGENREAD",
            "sameAsObject": "PMMETER"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETMETER",
            "target": "ASSETMETER",
            "remarks": "Relationsip to the PMMeters Asset Meter records,used to find all asset meter records for a given PMMeter",
            "whereClause": "assetnum=:assetnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETPMMETER",
            "target": "ASSETMETER",
            "remarks": "Relationsip to the PMMeters Asset Meter records,used to find all asset meter records for a given PMMeter metername",
            "whereClause": "assetnum=:assetnum and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationsip to the PMMeters Location Meter records,used to find all location meter records for a given PMMeter",
            "whereClause": "location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONPMMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationsip to the PMMeters Location Meter records,used to find all location meter records for a given PMMeter metername",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADING",
            "target": "LOCMETERREADING",
            "remarks": "Relationsip to the PMMeters Locmeterreading records,used to find all location meter records for a given PMMeter metername/location",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationsip to the PMMeters Meter records,used to find all meter records for a given PMMeter",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERREADING",
            "target": "METERREADING",
            "remarks": "Relationsip to the PMMeters Meterreading records,used to find all asset meter records for a given PMMeter metername/asset",
            "whereClause": "assetnum=:assetnum and metername=:metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PM associated with the PMMeter. The WHERE clause is: pm.pmnum = pmmeter.pmnum and pm.orgid = pmmeter.orgid and pm.siteid = pmmeter.siteid. The resulting set will contain one object.",
            "whereClause": "pmnum = :pmnum and orgid = :orgid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the PMMETER to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "PMMETER",
            "source": "ASSETMETER",
            "remarks": "Relationship to the PMMeter records for this AssetMeter. (pmmeter.assetnum = assetmeter.assetnum and pmmeter.metername = assetmeter.metername and pmmeter.siteid = assetmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "assetnum= :assetnum and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the PMMeter records for this LocationMeter. (pmmeter.location = locationmeter.location and pmmeter.metername = locationmeter.metername and pmmeter.siteid = locationmeter.siteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and metername=:metername and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "source": "METER",
            "remarks": "Relationship to the PMMeter table, used to find all PMs using this meter. (pmmeter.metername = meter.metername). The resulting set will contain zero or more objects. Note: Meters can be associated only with master PMs.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMMETER",
            "source": "PM",
            "remarks": "Relationsip to the PMs PMMeter records,used to find all PMMeter records for a given PM",
            "whereClause": "pmnum=:pmnum and siteid=:siteid",
            "cardinality": "UNDEFINED"
        }
    ]
}
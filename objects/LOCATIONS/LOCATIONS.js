mos = {
    "objectName": "LOCATIONS",
    "className": "psdi.app.location.LocationSet",
    "description": "The Locations Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "LOCATIONSID",
    "primaryKeyColumns": [
        "SITEID",
        "LOCATION"
    ],
    "logicalRelationships": [
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 3",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 7",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AMCREW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Crew Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "AFFECTEDSITE, AFFECTEDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Affected Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AREASAFFECTED",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, AFFECTEDLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFAULTREPFAC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Repair Facility",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, PLUSCLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of the Asset",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PLUSCLPLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETHIERARCHY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of Asset",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCCOMM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, SOURCELOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELATION",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TARGETLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, SOURCELOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCRELHIST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TARGETLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETLOCUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETSTATUS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Asset Status History",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, FROMLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, PLUSCFROMLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, PLUSCTOLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, TOLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "From Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PLUSCFROMLPLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 22",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PLUSCTOLPLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 23",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 24",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, FROMLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, PLUSCFROMLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, PLUSCTOLPLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, TOLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "To Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSETUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLOCSITEID, REPAIRLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLOCSITEID, TOPLEVELLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 40",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 41",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ASSIGNREPLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOPLEVELLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 42",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "AUTOATTRUPDATE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 31",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, CILOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "CI Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "COLLECTDETAILS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CONTASSETMETER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "CONTLINEASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 37",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 38",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INCIDENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 39",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVBALANCES",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Balence Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVCOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Cost Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 43",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 44",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVENTORY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inventory Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVLIFOFIFOCOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVLOT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lot Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invoice Cost Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVOICECOST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 50",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, DELLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 51",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, OPLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, DELLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, OPLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 57",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVRESERVE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 58",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVSTATUS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 59",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 60",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom from where items come",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 65",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 66",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "PRSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 67",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, TOSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "INVUSELINESPLIT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 78",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBSERVICE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBSERVICE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 80",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JOBTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 82",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "JPASSETSPLINK",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "KPIOEE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Labor Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 86",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, LABINVENTORYLOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 99",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 100",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 101",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 102",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LABINVENTORYSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, LABINVENTORYLOC",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 112",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LABTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, ANCESTOR",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location and Ancestors",
            "longDescription": "List of this location and all of its parent locations. Note that this is across all hierarchies which this location is a member of."
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCANCESTOR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location and Descendants",
            "longDescription": "List of this location and all the locations under it. Note that this is across all hierarchies which this location is a member of."
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONMETER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONMNTSKD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONOPSKD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONSPEC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCATIONWORKZONE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCAUTH",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parents of this location",
            "longDescription": "This is across all systems this location is a member of. In hierarchies there will be at most one parent, in networked systems there can be any number of parents."
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCHIERARCHY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, PARENT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Children of this location",
            "longDescription": "This is across all systems this location is a member of. "
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCKOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCLEADTIME",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "LOCMETERREADING",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
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
            "objectName": "LOCATIONS",
            "targetObject": "LOCSTATUS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Status History",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 104",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 105",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 106",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 107",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 108",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 109",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 110",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 111",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Non-Inventory Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 113",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Issue Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MATUSETRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 115",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFAULTREPFAC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Repair Facility",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFAULTREPFACSITEID, DEFSTOREROOM",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 117",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFSITE, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 118",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "DEFSITE, DEFSTOREROOM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STOREROOMSITE, DEFAULTREPFAC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 120",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MAXUSER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STOREROOMSITE, DEFSTOREROOM",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Default Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MEASUREMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurements for Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MEASUREPOINT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Measurement Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 126",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 127",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MR Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MOVETOSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 129",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MOVETOSITE, MOVETOLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Moved To Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLACEMENTSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 131",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPLACEMENTSITE, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 132",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 134",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 135",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "MULTIASSETLOCCI",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITEID, MOVETOLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 136",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "NAMEDUSERS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSCOMMODITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSON",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person''s Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PERSONGROUPVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "USEFORSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 141",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCDSASSETLINK",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCJPDATASHEET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PLUSCWODS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TAGLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 145",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PM''s Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 147",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 148",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom used for PM generated work orders.",
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
            "objectName": "LOCATIONS",
            "targetObject": "PO",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 151",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PO",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom location for PO items.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 153",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 154",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 155",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "POLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "TOSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 156",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 157",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target storeroom location for inventory on this PR.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 159",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 160",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "PR Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PRLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Target storeroom for PR Line item.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 163",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 164",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "PROBLEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 165",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERMUTEX",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 166",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, ASSETLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 167",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 168",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 169",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, ASSETLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 170",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 171",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REORDERPAD",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 172",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "REPFACAUTH",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "RFQLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 175",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETLOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 176",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "ROUTE_STOP",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location Stop",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SAFETYLEXICON",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 179",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "POSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 180",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SERVRECTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 181",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, FROMSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Source Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "FROMSITEID, TOSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 183",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, FROMSTORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 184",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SHIPMENTLINE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, TOSTORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Destination Storeroom",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDACTIVITYQBE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Activity QBE Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Crew End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 216",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 217",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 218",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Crew Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 220",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 221",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 222",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDEXTRACAPCREWVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "WORKSITE, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "SKD Extra Capacity Crew Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 224",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 225",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 228",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 229",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 230",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MNT Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "MNTLOCATIONSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 232",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 233",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, MNTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 234",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SKDPROJECT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLAASSETLOC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Locations related to an SLA",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "End Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ENDLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 238",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, ENDLOCATION",
            "relNum": "1 to many",
            "status": "INVALIDATED",
            "description": "Relationship 239",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SLROUTE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STARTLOCSITEID, STARTLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Start Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SPRELATEDASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SPRELATEDASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, RELATEDLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Related Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SPWORKASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 191",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 192",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "SR",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 193",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TAGOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tag Out Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ASSETSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 195",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ORIGRECSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 196",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TICKET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of the Ticket",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TLOAMPRMDFLT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tool Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 200",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 201",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLINV",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITEID, STORELOC",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tool Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "ROTASSETSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Rotating Asset Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "TOOLTRANS",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Tool Transaction Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "UNASSIGNEDWORKVIEW",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Unassgined Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WARRANTYASSET",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "LOCATIONSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Warranty Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 206",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Facility",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 208",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 210",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 212",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 214",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location for Activity",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 216",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOACTIVITY",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location for Work of Activity",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOASSETUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 219",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Location for Change",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 221",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location on Change",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 223",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCHANGE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOCONTRACT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of contract work.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 226",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOGEN",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, STORELOC",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 227",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOLOCKOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Locations to Lock-out for Work",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOLOCUSERCUST",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Linked Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOMATSTATUSSYNC",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 231",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 233",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location on Release",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 235",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORELEASE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of Release Work",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, LOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 237",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, REPAIRFACILITY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Repair facility used by the Work Order",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "REPFACSITEID, WORKLOCATION",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 239",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Work Order''s Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, REPAIRFACILITY",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 241",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WORKORDER",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, WORKLOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location responsible for work.",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOSAFETYLINK",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Safety Link Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WOTAGOUT",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Lock Out Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPITEM",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPMATERIAL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPSERVICE",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "SITEID, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location",
            "longDescription": null
        },
        {
            "objectName": "LOCATIONS",
            "targetObject": "WPTOOL",
            "parentKeys": "SITEID, LOCATION",
            "targetKeys": "STORELOCSITE, LOCATION",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Storeroom Location",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, BILLTOADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 4",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SERVICEADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 5",
            "longDescription": null
        },
        {
            "objectName": "ADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SHIPTOADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 6",
            "longDescription": null
        },
        {
            "objectName": "CLASSSTRUCTURE",
            "targetObject": "LOCATIONS",
            "parentKeys": "CLASSSTRUCTUREID",
            "targetKeys": "CLASSSTRUCTUREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "LANGUAGE",
            "targetObject": "LOCATIONS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "BILLTOLABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 140",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "INVOWNER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "LOCATIONS",
            "parentKeys": "PERSONID",
            "targetKeys": "SHIPTOLABORCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 143",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "LOCATIONS",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, SADDRESSCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Relationship 2",
            "longDescription": null
        },
        {
            "objectName": "SITE",
            "targetObject": "LOCATIONS",
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
            "remarks": "Storeroom where the item is stored.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the storeroom location. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "TYPE",
            "required": true,
            "persistent": true,
            "title": "Type",
            "remarks": "Type of location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CONTROLACC",
            "required": false,
            "persistent": true,
            "title": "GL Control Account",
            "remarks": "Default GL account that Maximo applies to items in this storeroom during GL transactions such as issues, returns, receipts, transfers, and adjustments. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCOUNT",
            "required": false,
            "persistent": true,
            "title": "GL Account",
            "remarks": "Default GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PURCHVARACC",
            "required": false,
            "persistent": true,
            "title": "Purchase Variance Account",
            "remarks": "Account used to track fluctuations in purchase costs for items (or the variance between PO and original Last and Standard price). Not used with any MAXIMO transactions. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOICEVARACC",
            "required": false,
            "persistent": true,
            "title": "Invoice Variance Account",
            "remarks": "Debit account used to track variances in the price, expressed in the vendor's currency, between receipt and invoice for this storeroom. The transaction amount is positive when the invoice line cost is greater than the receipt cost. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CURVARACC",
            "required": false,
            "persistent": true,
            "title": "Currency Variance Account",
            "remarks": "Account containing the differences between the PO price and the invoice price that result from changes in the exchange rate. If, as a result of an exchange rate change, the invoice cost in base currency exceeds the receipt cost in base currency, then the transaction amount is positive. If the invoice cost in base currency is less than the receipt cost in base currency, then the transaction amount is negative. This account is paired with the GL control account; when the currency variance account's value decreases, the inventory control account's value decreases. Variance accounts track price variances by storeroom location, not by item. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHRINKAGEACC",
            "required": false,
            "persistent": true,
            "title": "Shrinkage Account",
            "remarks": "Credit account used when manually adjusting the inventory quantity. The transaction is positive when the actual inventory quantity is greater than the MAXIMO-calculated current balance. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVCOSTADJACC",
            "required": false,
            "persistent": true,
            "title": "Cost Adjustment Account",
            "remarks": "Account that tracks changes in either the average price or the standard price from manual inventory price adjustments. These changes result from using the Adjust Average Cost and Adjust Standard Cost actions, respectively. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RECEIPTVARACC",
            "required": false,
            "persistent": true,
            "title": "Receipt Variance Account",
            "remarks": "Debit account to track the variance between PO and Invoice exchange rates. This account contains the differences between the inventory standard cost and the receipt cost (specific to the storeroom) for any items in the associated storeroom location. It is used for standard costing only. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Last Changed by user",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Last Change date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DISABLED",
            "required": true,
            "persistent": true,
            "title": "Disabled",
            "remarks": "Is this record active?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDCONTROLACC",
            "required": false,
            "persistent": true,
            "title": "Old GL Control Account",
            "remarks": "Last inventory/transit control account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDSHRINKAGEACC",
            "required": false,
            "persistent": true,
            "title": "Old Shrinkage Account",
            "remarks": "Last shrinkage cost account for manual adjustment for inventory quantity.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDINVCOSTADJACC",
            "required": false,
            "persistent": true,
            "title": "Old Invoice Cost Adjustment Account",
            "remarks": "Last inventory cost adjustment account for manual inventory price adjustments.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CLASSSTRUCTUREID",
            "required": false,
            "persistent": true,
            "title": "Class Structure",
            "remarks": "Class Structure Identifier",
            "sameAsAttribute": "CLASSSTRUCTUREID",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "GISPARAM1",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 1",
            "remarks": "Graphical Information System interface parameter 1",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GISPARAM2",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 2",
            "remarks": "Graphical Information System interface parameter 2",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GISPARAM3",
            "required": false,
            "persistent": true,
            "title": "GIS Parameter 3",
            "remarks": "Graphical Information System interface parameter 3",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": true,
            "title": "Site",
            "remarks": "Specifies the site where this location or storeroom resides.",
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
            "attributeName": "INTLABREC",
            "required": false,
            "persistent": true,
            "title": "Internal Labor Account",
            "remarks": "Internal Labor Control GL Account",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDEFAULT",
            "required": true,
            "persistent": true,
            "title": "Default Storeroom",
            "remarks": "Specifies whether this storeroom is the default storeroom for the site. If the check box is selected, Maximo reserves items for this storeroom if a job plan or work order does not specify a storeroom. If the check box is cleared (the default), this storeroom is not used as the default storeroom when work orders are generated with no storeroom information.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SHIPTOADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Ship to Address",
            "remarks": "Default address code to ship items to when reorders are processed for this storeroom. Click the Select Value button to choose a shipping code.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "SHIPTOLABORCODE",
            "required": false,
            "persistent": true,
            "title": "Ship to Labor",
            "remarks": "Default labor code to ship items to when reorders are processed for this storeroom. Click the Select Value button to choose a labor code.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "BILLTOADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Bill to Address",
            "remarks": "Default Bill To Address Code",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "BILLTOLABORCODE",
            "required": false,
            "persistent": true,
            "title": "Bill to Labor",
            "remarks": "Default Bill To Labor Code",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Asset Short Description (One Line)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHILDREN",
            "required": true,
            "persistent": false,
            "title": "Children",
            "remarks": "CHILDREN",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ADDTOSTORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "ADDTOSTORELOC",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WARRANTYEXPDATE",
            "required": false,
            "persistent": false,
            "title": "Warranty Date",
            "remarks": "WARRANTYEXPDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CALNUM",
            "required": false,
            "persistent": false,
            "title": "Calendar",
            "remarks": "CALNUM",
            "sameAsAttribute": "CALNUM",
            "sameAsObject": "CALENDAR"
        },
        {
            "attributeName": "FAILURECODE",
            "required": false,
            "persistent": false,
            "title": "Failure Class",
            "remarks": "FAILURECODE",
            "sameAsAttribute": "FAILURECODE",
            "sameAsObject": "FAILURECODE"
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "PARENT",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "NEWPERCENT",
            "required": false,
            "persistent": false,
            "title": "Recent Lead Time Weight in %",
            "remarks": "Weight in percent given to the most recent receipt of an order. You might want to give the most recent record more (or less) importance in the calculation of lead time.You can weigh the lead time calculation by specifying that a certain percent of the calculation is based on the most recent receipt for that inventory item, while the remaining percentage (the difference) is assigned automatically to the \"\"old\"\" lead time, or the lead time that is currently set for the inventory item. The weight in percent used for the current inventory lead time is automatically considered 100% minus the Recent Lead Time Weight in %.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCPRIORITY",
            "required": false,
            "persistent": false,
            "title": "Priority",
            "remarks": "LOCPRIORITY",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": true,
            "title": "Status",
            "remarks": "STATUS",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "ITEMNUM",
            "required": false,
            "persistent": false,
            "title": "Item",
            "remarks": "ITEMNUM",
            "sameAsAttribute": "ITEMNUM",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "SYSTEMID",
            "required": false,
            "persistent": false,
            "title": "System",
            "remarks": "SYSTEMID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ITEMSETID",
            "required": false,
            "persistent": false,
            "title": "Item Set",
            "remarks": "Set identifier for the item.",
            "sameAsAttribute": "SETID",
            "sameAsObject": "SETS"
        },
        {
            "attributeName": "SHIFTNUM",
            "required": false,
            "persistent": false,
            "title": "Shift",
            "remarks": "SHIFTNUM field",
            "sameAsAttribute": "SHIFTNUM",
            "sameAsObject": "SHIFT"
        },
        {
            "attributeName": "SERVICEADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Service Address",
            "remarks": "Service Address Code",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "ADDRESS"
        },
        {
            "attributeName": "GROUPNAME",
            "required": false,
            "persistent": false,
            "title": "Meter Group",
            "remarks": "All meters belonging to this location's metergroup are automatically associated with this Location in the LocationMeter object.  Additions to the meter group can also be added to this Location in the LocationMeter object.",
            "sameAsAttribute": "GROUPNAME",
            "sameAsObject": "METERGROUP"
        },
        {
            "attributeName": "LOCATIONSID",
            "required": true,
            "persistent": true,
            "title": "LOCATIONSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASCHILDREN",
            "required": true,
            "persistent": false,
            "title": "Has Children",
            "remarks": "Does this location have child locations?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASPARENT",
            "required": true,
            "persistent": false,
            "title": "Has Parent",
            "remarks": "Does this location belong to a parent location?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTNAME",
            "required": false,
            "persistent": false,
            "title": "Object",
            "remarks": "The name of this object.",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "USEINPOPR",
            "required": true,
            "persistent": true,
            "title": "Use in PO/PR",
            "remarks": "Specifies whether this storeroom can be used to supply and reserve inventory items and tools for use with internal purchase requisitions and internal purchase orders. If the check box is selected, you can order and reserve items or tools from this storeroom on internal POs and PRs. If the check box is cleared (the default), this storeroom cannot be used to supply items or tools internally.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOOLCONTROLACC",
            "required": false,
            "persistent": true,
            "title": "Tool Control Account",
            "remarks": "Default debit account for capitalized tools. Click the Select Value button to choose a GL account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "ADDTOSTORESITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site Id for Add Item To Storeroom",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AUTOWOGEN",
            "required": true,
            "persistent": true,
            "title": "Automatically Generate Work Orders",
            "remarks": "Flag that indicates whether to start the wogen process when meter frequency is reached for a location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STATUSIFACE",
            "required": true,
            "persistent": false,
            "title": "Has Status Changed",
            "remarks": "Non persistent boolean field to indicate whether the status has been changed after the stateful object is fetched from the database.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HIERARCHYPATH",
            "required": false,
            "persistent": false,
            "title": "CLASSSTRUCTURE.HIERARCHYPATH",
            "remarks": "Store CLASSSTRUCTURE.HIERARCHYPATH",
            "sameAsAttribute": "HIERARCHYPATH",
            "sameAsObject": "CLASSSTRUCTURE"
        },
        {
            "attributeName": "CINUM",
            "required": false,
            "persistent": false,
            "title": "Configuration Item",
            "remarks": "Configuration Item",
            "sameAsAttribute": "ACTCINUM",
            "sameAsObject": "ACTCI"
        },
        {
            "attributeName": "STATUSDATE",
            "required": true,
            "persistent": true,
            "title": "Status Date",
            "remarks": "Date the Locations status was last changed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INVOWNER",
            "required": false,
            "persistent": true,
            "title": "Inventory Owner",
            "remarks": "Inventory Owner.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "ISREPAIRFACILITY",
            "required": true,
            "persistent": true,
            "title": "Is a Repair Facility",
            "remarks": "Specifies whether the location is a repair facility location. Repair facilities can take ownership of work orders from multiple sites in the same organization. User security can then be configured to give permissions to view work orders in multiple sites if the work orders are owned by the repair facility.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDUEDATE",
            "required": false,
            "persistent": true,
            "title": "Next Calibration Due Date",
            "remarks": "Displays the date that the next calibration must be completed by.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCDUEDATE_NP",
            "required": false,
            "persistent": false,
            "title": "Next Calibration Due Date",
            "remarks": "The date when the next calibration of the instrument is due.",
            "sameAsAttribute": "PLUSCDUEDATE",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "PLUSCLOOP",
            "required": true,
            "persistent": true,
            "title": "Loop Calibration",
            "remarks": "Select this check box to identify the location as a loop calibration.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PLUSCPMEXTDATE",
            "required": true,
            "persistent": true,
            "title": "Due Date Extended",
            "remarks": "When this check box is selected, the Extended Date on the PM for the location was set. This check box is cleared when the work order is generated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SADDRESSCODE",
            "required": false,
            "persistent": true,
            "title": "Service Address",
            "remarks": "The address code identifies a service address. It must be unique by site for each service address.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "LHANCESTOR",
            "required": false,
            "persistent": false,
            "title": "Ancestor Location",
            "remarks": "Parent Ancestor that contains the Service Address information.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "LHANCESTORDESC",
            "required": false,
            "persistent": false,
            "title": "Ancestor Location Description",
            "remarks": "Parent Ancestor description that contains the Service Address information.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "ITEM"
        },
        {
            "attributeName": "LHANCESTORADDRESS",
            "required": false,
            "persistent": false,
            "title": "Ancestor Address",
            "remarks": "Service Address of the ancestor location",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "LHANCESTORADDRESSDESC",
            "required": false,
            "persistent": false,
            "title": "Ancestor Address Description",
            "remarks": "Service Address description of the ancestor location",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "NPADDRESSCODE",
            "required": false,
            "persistent": false,
            "title": "Address Code",
            "remarks": "Non-persistent attribute for Address Code",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "NPADDRESSDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Non-persistent attribute for Address Code Description",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "SHOWFROMDATE",
            "required": false,
            "persistent": false,
            "title": "From",
            "remarks": "The date from which the operational/maintenance schedule records are displayed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "NPADDRESSDESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ASSIGNED",
            "required": true,
            "persistent": false,
            "title": "Assigned",
            "remarks": "Indicates if location with no availability during the date range is included in the available location list.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "AVAILABILITY",
            "required": false,
            "persistent": false,
            "title": "Available Hours",
            "remarks": "Available hours for a given date.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "STARTTIME",
            "required": false,
            "persistent": false,
            "title": "Start Time",
            "remarks": "Start time of available hours.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ADDRESSBILLTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find the location's default bill to address. (address.addresscode = locations.billtoaddresscode). This relationship will find zero or one object.",
            "whereClause": "addresscode = :billtoaddresscode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ADDRESSSHIPTO",
            "target": "ADDRESS",
            "remarks": "Relationship to the Address table, used to find the location's default ship to address. (address.addresscode = locations.shiptoaddresscode). This relationship will find zero or one object.",
            "whereClause": "addresscode = :shiptoaddresscode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVEASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, used to find the active asset records for the location. The resulting set will contain one or more objects.",
            "whereClause": "location=:location and siteid = :siteid and status not in (select value from synonymdomain where maxvalue in ('DECOMMISSIONED') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table. (locations.location = asset.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "PLUSCASSET",
            "target": "ASSET",
            "remarks": "Relationship to the Asset table, including assets related through the loop location field. (locations.location = asset.location). The resulting set will contain zero or more objects.",
            "whereClause": "(location=:location or plusclploc=:location) and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "ASSETLOCCOMM",
            "target": "ASSETLOCCOMM",
            "remarks": "Relationship to the ASSETLOCCOMM table, used to find the ASSETLOCCOMMs for the location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETLOCRELATION",
            "target": "ASSETLOCRELATION",
            "remarks": "Relationship to the ASSETLOCRELATION table, used to find related location's for given Location.",
            "whereClause": "sourcelocation =:location or targetlocation =:location and siteid =: siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSETTRANS",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the AssetTrans table, used to find the asset move transactions from or to this location. (locations.location= assettrans.fromloc or locations.location =assettrans.toloc). The resulting set will contain zero or more objects.",
            "whereClause": "( fromloc = :location or toloc=:location ) and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "ASSETTRANSMOVED",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the ASSETTRANS table, used to find the ASSETTRANS for the LOCATION, with TRANSTYPE = MOVED. ( (fromloc = :location or toloc=:location) and siteid = :siteid and transtype in (select value from synonymdomain where domainid='ASSETTRANSTYPE' AND MAXVALUE='MOVED') ).  The resulting set will contain zero or more objects.",
            "whereClause": "( fromloc = :location or toloc=:location ) and siteid = :siteid and transtype in (select value from synonymdomain where domainid='ASSETTRANSTYPE' AND MAXVALUE='MOVED')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCASSETTRANSMOVED",
            "target": "ASSETTRANS",
            "remarks": "Relationship to the ASSETTRANS table, used to find the ASSETTRANS for the LOCATION or Loop Locatoin, with TRANSTYPE = MOVED. The resulting set will contain zero or more objects.",
            "whereClause": "( fromloc = :location or toloc=:location or pluscfromlploc=:location or plusctolploc=:location ) and siteid = :siteid and transtype in (select value from synonymdomain where domainid='ASSETTRANSTYPE' AND MAXVALUE='MOVED')",
            "cardinality": null
        },
        {
            "name": "REPLOCASSIGN",
            "target": "ASSIGNREPLOC",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "repairlocation=:location and replocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "ASSIGNREPLOC",
            "target": "ASSIGNREPLOC",
            "remarks": "Relationship to ASSIGNREPLOC table.",
            "whereClause": "repairlocation=:location and replocsiteid=:siteid",
            "cardinality": null
        },
        {
            "name": "AUTOATTRUPDATE",
            "target": "AUTOATTRUPDATE",
            "remarks": "Relationship to the workorder's autoattrupdate records, used to find the autoattrupdate records for a given location.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CI",
            "target": "CI",
            "remarks": "Relationship to the CI table, used to find CI for a given Location.",
            "whereClause": "location=:location and assetlocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSANCESTOR",
            "target": "CLASSANCESTOR",
            "remarks": "Relationship to the classancestor table, used to find the ancestor records for a given classstructure. (locatoins.classstructureid = classancestor.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CLASSSPEC",
            "target": "CLASSSPEC",
            "remarks": "Relationship to the ClassSpec table, used to find the class specifications which contain the operating location's ClassStructureId. (locations.classstructureid =classspec.classstructureid). The resulting set will contain zero or more objects. The class specifications are a set of attributes and are defined in Asset Catalog Setup.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "SINGLE"
        },
        {
            "name": "CLASSSTRUCTURE",
            "target": "CLASSSTRUCTURE",
            "remarks": "Relationship to the ClassStructure table, used to find the class structure which contains the operating location's ClassStructureId. (locations.classstructureid =classstructure.classstructureid). The resulting set will contain zero or one object.",
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOC_CLASS_STRUCT",
            "target": "CLASSSTRUCTURE",
            "remarks": null,
            "whereClause": "classstructureid = :classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COLLECTDETAILS",
            "target": "COLLECTDETAILS",
            "remarks": "Relationship to the COLLECTDETAILS table, used to find a CollectDetails record for a given Location. (COLLECTDETAILS.location = LOCATIONS.location). The resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid= :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES_COURIERVENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the couriers or vendors which are associated with the courier or vendor location via Companies.location. (locations.location = companies.location). The resulting set will contain zero or one object.  If found, the location can not be deleted.",
            "whereClause": "location = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMPANIES_STOREROOM",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find the vendor set up as the storeroom location for internal POs or the Companies records which are associated with the storeroom location via Companies.location. (locations.location = companies.company OR locations.location = companies.location). The resulting set will contain zero or one object. If found, the location can not be deleted.",
            "whereClause": "(company = :location or location = :location) and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTASSET",
            "target": "CONTRACTASSET",
            "remarks": "Relationship to the ContractAsset table, used to find a contract records for a given location. (contractasset.location = locations.location and contractasset.orgid = locations.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "location = :location and orgid = :orgid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the DocLinks table, used to find all documents for a given location. (doclinks.keytable = 'LOCATIONS' and doclinks.keycolumn = 'LOCATION' and locations.location = doclinks.keyvalue). The resulting set will contain zero or more objects.",
            "whereClause": "ownertable = 'LOCATIONS' and ownerid = :locationsid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table for a given location. (failurelist.failurecode=locations.failurecode). The resulting set will contain zero or one object. Note: FailureCode is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "failurecode = :failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "IMGLIB",
            "target": "IMGLIB",
            "remarks": "Relationship to the IMGLIB table, used to find the image for a given location. (imglib.refobject='LOCATIONS' and imglib.refobjectid=:LOCATIONS.LOCATIONSID). The resulting set will contain zero or one object.",
            "whereClause": "refobject='LOCATIONS' and refobjectid=:locationsid",
            "cardinality": null
        },
        {
            "name": "INCIDENTLOC",
            "target": "INCIDENT",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESIN",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find item balances for material transfers in to a given storeroom location. (invbalances.location = locations.location). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Transfer action on the Transfer In tab of the Issues and Transfers application.",
            "whereClause": "orgid =:orgid and curbal > 0",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVBALANCESOUT",
            "target": "INVBALANCES",
            "remarks": "Relationship to the InvBalances table, used to find item balances for material transfers out of a given storeroom location. (invbalances.location = locations.location). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Transfer action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table. (locations.location = inventory.location). The resulting set will contain zero or more objects. This relationship is primarily used for locations of psdi.app.location.Location STOREROOM, LABOR or COURIER only.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JSP_INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table.  (locations.location = inventory.location). The resulting set will contain zero or more objects. This relationship is primarily used  in 'GUI' for locations of psdi.app.location.Location STOREROOM, LABOR or COURIER only.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEW_INVENTORY",
            "target": "INVENTORY",
            "remarks": "Relationship to the Inventory table, used to create an empty Inventory set for a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used in the Add Items to Store action where new Inventory records are created in the empty set initially.",
            "whereClause": "1>2 and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOLOCATIONS",
            "target": "INVENTORY",
            "remarks": "Relationship to the Location table, used to find the reservation records. The resulting set will contain one or more objects.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "INVOICECOST",
            "target": "INVOICECOST",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVE",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material issues from a given storeroom location. (locations.location = invreserve.location and ponum is null). The resulting set will contain zero or more objects. The reservations found using the relationship can be used only for material issues from a given storeroom location. These reservations may have been created as a result of approvals of work orders or material requests. They may have been manually created for purpose of reserving materials for work orders or material requests, but not for internal POs.",
            "whereClause": "location = :location and storelocsiteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEIN",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers in to a given storeroom location. (polineid is not null and exists. (select 1 from poline where poline.polineid=invreserve.polineid and poline.storeloc = locations.location')). The resulting set will contain zero or more objects. The reservations found using the relationship can be used only for material transfers in to a given storeroom location. These reservations may have been created as a result of approvals of internal POs. They may have been manually created for purpose of reserving materials for internal POs.",
            "whereClause": "polineid is not null and exists (select 1 from poline where poline.polineid=invreserve.polineid and poline.storeloc = :location) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVRESERVEOUT",
            "target": "INVRESERVE",
            "remarks": "Relationship to the InvReserve table, used to find inventory reservations for material transfers out of a given storeroom location. (locations.location = invreserve.location and polineid is not null and exists. (select 1 from po where po.vendor = invreserve.location and invreserve.ponum = po.ponum)). The resulting set will contain zero or more objects.  The reservations found using the relationship can be used only for material transfers out of a given storeroom location. These reservations may have been created as a result of approvals of internal POs. They may have been manually created for purpose of reserving materials for internal POs.",
            "whereClause": "location = :location and polineid is not null and exists (select 1 from po where po.vendor = invreserve.location and invreserve.ponum = po.ponum) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEM",
            "target": "ITEM",
            "remarks": "Relationship to the Item table. (item.itemnum=locations.itemnum and item.itemsetid = locations.itemsetid). The resulting set will contain zero or one object. ItemNum is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "itemnum = :itemnum and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ITEMSPEC",
            "target": "ITEMSPEC",
            "remarks": "Relationship to the ItemSpec table, used to find the item specifications which contain the operating location's ItemNum and ClassStructureId. (locations.classstructureid =itemspec.classstructureid and itemspec.itemnum=locations.itemnum and itemspec.itemsetid = locations.itemsetid). The resulting set will contain zero or more objects. If found, these item specifications will be copied to the location's specifications. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "itemnum = :itemnum and classstructureid = :classstructureid and itemsetid = :itemsetid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TOPITEMSTRUCT",
            "target": "ITEMSTRUCT",
            "remarks": "Relationship to the ItemStruct table, used to find the top-level item assembly structure which contains the operating location's ItemNum. (ItemStruct.Itemnum =location.itemnum and itemstruct.itemid=location.itemnum and itemstruct.parent is null and itemstruct.itemsetid = locations.itemsetid). The resulting set will contain zero or one object. ItemNum is a non-persistent column for the Location object. See the attribute defined in Location table for more information.",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "JPASSETSPLINK",
            "target": "JPASSETSPLINK",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABINVENTORYLOC",
            "target": "LABOR",
            "remarks": "Relationship to the labor table where labor.labinventoryloc=locations.location and labor.orgid=locations.orgid.  This will return 0 or more objects.",
            "whereClause": "labinventoryloc=:location and labinventorysite=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR_COURIERLABOR",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the persons indentified as this labor location via the storelocation attribute. (locations.location = labor.storelocation OR locations.location = labor.worklocation). The resulting set will contain zero or more objects. A location of type LABOR is a logical location where inventory balances are tracked but the location is not bound to a physical place. Materials can be transferred to the labor location(person) from a storeroom and the labor location(person) can tranfer materials to a storeroom. The location can not be deleted if such records exist.",
            "whereClause": "labinventoryloc = :location or worklocation = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABOR_OPERATING",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the persons who work at the location. (locations.location =labor.worklocation). The resulting set will contain zero or more objects. If there are people working at the operating location, the location can not be deleted.",
            "whereClause": " worklocation = :location and worksite=:siteid and orgid=:orgid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LABOR_STOREROOM",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the persons whose default storeroom is this location. (locations.location =labor.worklocation OR locations.location = labor.defaultstoreloc). The resulting set will contain zero or more objects. If the storeroom location is referenced as the persons' default storeroom, it can not be deleted.",
            "whereClause": "worklocation = :location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORBILLTO",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the location's default bill to labor code (contact information). (labor.laborcode = locations.billtolaborcode). This relationship will find zero or one object.",
            "whereClause": "laborcode = :billtolaborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LABORSHIPTO",
            "target": "LABOR",
            "remarks": "Relationship to the Labor table, used to find the location's default ship to labor code (contact information). (labor.laborcode = locations.shiptolaborcode). This relationship will find zero or one object.",
            "whereClause": "laborcode = :shiptolaborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LINKCLASSSPEC",
            "target": "LINKCLASSSPEC",
            "remarks": "Relationship to the non-persistent LinkClassSpec table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the Associate Specification Template action page to associate the operating location with a classstructure.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCANCESTOR",
            "target": "LOCANCESTOR",
            "remarks": "Relationship to the LocAncestor table, used to find the ancestors of a given operating location in the hierarchies within all systems. (locations.location=locancestor.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INT_LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table for INT table. The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to find LocationMeters associated with the Location. The WHERE clause is: locationmeter.location = locations.location and locationmeter.siteid = locations.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMETERCONTINUOUS",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter object, used to find the location meters for the current location that have a CONTINUOUS meter type",
            "whereClause": "location = :location and siteid = :siteid and exists (select metername from meter where metername=locationmeter.metername and metertype in (select value from synonymdomain where maxvalue='CONTINUOUS' and domainid='METERTYPE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ACTIVELOCATIONMETER",
            "target": "LOCATIONMETER",
            "remarks": "Relationship to the LocationMeter table, used to find active LocationMeters associated with the Location. The WHERE clause is: locationmeter.active = :yes and locationmeter.location = locations.location and locationmeter.siteid = locations.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "active=:yes and location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONMNTSKD",
            "target": "LOCATIONMNTSKD",
            "remarks": "Relationship to locationmntskd table, used to find all the location maintenance schedule dates for a location.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONOPSKD",
            "target": "LOCATIONOPSKD",
            "remarks": "Relationship to locationopskd table, used to find all the location operational schedule dates for a location.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS_ADDTOSTORE",
            "target": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location linked to the current location's addItemToStore attribute. (Locations.location = Locations.AddToStoreLoc). The resulting set will contain one object. This relationship is primarily used in the Add Item To Store action of the Item application.",
            "whereClause": "location = :addtostoreloc and siteid = :addtostoresiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCPARENT_ADDRESSSYSTEM_HIERARCHY",
            "target": "LOCATIONS",
            "remarks": "This relationship returns the Parent Location of a Location based on the selected Address System hierarchy",
            "whereClause": "location in (select lochierarchy.parent from locsystem, lochierarchy where locsystem.siteid=lochierarchy.siteid and locsystem.systemid=lochierarchy.systemid and locsystem.address=:yes and lochierarchy.location=:location and lochierarchy.siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONSSPEC",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find the specifications which contain the attributes and values to characterize the operating location. (locations.location=locationspec.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONSSPECCLASS",
            "target": "LOCATIONSPEC",
            "remarks": "Relationship to the LocationSpec table, used to find the location specifications which contain the operating location's individual attributes and values to characterize the location. (locations.location= locationspec.location and locations.classstructureid =locationspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and classstructureid = :classstructureid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSER",
            "target": "LOCATIONUSERCUST",
            "remarks": "user record for the location",
            "whereClause": "location = :location and siteid = :siteid and isuser=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONUSERCUST",
            "target": "LOCATIONUSERCUST",
            "remarks": "Relationship to the LocationUserCust table, used to find all users and custodians for a given location. (locationusercust.location = location.location and siteid = siteid). This resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONCUSTODIAN",
            "target": "LOCATIONUSERCUST",
            "remarks": "custodian record for the location",
            "whereClause": "location = :location and siteid = :siteid and iscustodian=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PRIMARYLOCATIONUSERCUST",
            "target": "LOCATIONUSERCUST",
            "remarks": "Relationship to the LOCATIONUSERCUST table to get the primary user of a location.",
            "whereClause": "location=:location and siteid=:siteid and isprimary=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONWORKZONE",
            "target": "LOCATIONWORKZONE",
            "remarks": "Relationship from locations to locationworkzones",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCAUTH",
            "target": "LOCAUTH",
            "remarks": "Relationship to the LocAuth table, used to find user authorization for a given storeroom location. (locations.location = locauth.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCCHANGESTATUS",
            "target": "LOCCHANGESTATUS",
            "remarks": "Relationship to the non-persistent LocChangeStatus table. (No where clause). The resulting set will contain zero objects. This relationship is used only for the Change Status action page to change the status of a given operating location.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location as a node in the hierarchy within the selected system. (locations.location=lochierarchy.location and lochierarchy.systemid = locations.systemid and lochirarchy.parent is not null). The resulting set will contain zero or one object. The LocHierarchy record found from this relationship helps to identify the parent of the current location or to determine if the operating location is a top-level node if there is no parent. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:location and systemid=:systemid and parent is not null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHY_TOP",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the hierarchy records representing the top location in the given system. (locations.systemid=lochierarchy.systemid and lochierarchy.parent is null). The resulting set will contain zero or more objects.",
            "whereClause": "systemid=:systemid and parent is null and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERARCHYSELF",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location as a node in the hierarchy within the selected system. (locations.location=lochierarchy.location and lochierarchy.systemid = locations.systemid ). The resulting set will contain zero or one object. The LocHierarchy record found from this relationship helps to identify the parent of the current location or to determine if the operating location is a top-level node if there is no parent. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:location and systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCHIERLOCONLY",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find all hierarchy records for an operating location for all systems. (locations.location=lochierarchy.location). The resulting set will contain zero or more objects. An operating location may exist in multiple hierarchies in a networked system. It may also be found as a node in a hierarchical system.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDREN",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to find the operating location's child nodes in the hierarchy within the selected system. (locations.location=lochierarchy.parent and lochierarchy.systemid=locations.systemid and lochierarchy.siteid=locations.siteid). The resulting set will contain zero or more objects. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "parent=:location and systemid=:systemid and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INSYSTEM_PARENT",
            "target": "LOCHIERARCHY",
            "remarks": "Relationship to the LocHierarchy table, used to check whether or not the parent entered already exists in the hierarchy for the selected system. (lochierarchy.systemid = locations.systemid and locations.parent = lochierarchy.location). This resulting set will contain zero or more objects. It is not possible to associate a child with a parent if the parent does not exist in the hierarchy yet. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "location=:parent and systemid = :systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCKOUT",
            "target": "LOCKOUT",
            "remarks": "Relationship to the LockOut table, used to find the assets locked out identified by the location. (locations.location =lockout.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCLEADTIME",
            "target": "LOCLEADTIME",
            "remarks": "Relationship to the LocLeadTime table, used to find the lead time percentage for a given storeroom location. (locations.location=locleadtime.location). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCMETERREADINGS",
            "target": "LOCMETERREADING",
            "remarks": "Relationship to the LocMeterReading table, used to find the LocMeterReadings associated with the Location. The WHERE clause is: locmeterreading.location = locations.location and locmeterreading.orgid = locations.orgid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and orgid = :orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCOPER",
            "target": "LOCOPER",
            "remarks": " Relationship to the LocOper table, used to find information for a given operating location. (locations.location = locoper.location). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERATION_INFO",
            "target": "LOCOPER",
            "remarks": null,
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSTATUS",
            "target": "LOCSTATUS",
            "remarks": "Relationship to the LocStatus table, used to find the history of status changes for a given operating location. (locations.location=locstatus.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the LocSystem table, used to find the current selected system for the operating location. (locsystem.systemid=locations.systemid). The resulting set will contain one object. An operating location can belong to many systems. SystemId is a non-persistent column which represents the current selected system. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "systemid=:systemid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCSYSTEMS_FOR_LOCATION",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the LocSystem table, used to find all systems this operating location belongs to. (where exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and lochierarchy.location=locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "exists (select * from lochierarchy where locsystem.systemid=lochierarchy.systemid and locsystem.siteid=lochierarchy.siteid and lochierarchy.location=:location ) and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "INSYSTEM",
            "target": "LOCSYSTEM",
            "remarks": "Relationship to the LocSystem table, used to check whether or not a location hierarchy already exists for a given system. (locsystem.systemid = locations.systemid and exists(select lochierarchy.systemid from lochierarchy where lochierarchy.systemid=locsystem.systemid and lochierarchy.siteid=locsystem.siteid). The resulting set will contain zero or more objects.  Note: If a new location is being associated to a system where no hierarchies exist, the location will automatically become top-level in this system. SystemId is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "systemid = :systemid and exists(select lochierarchy.systemid from lochierarchy where lochierarchy.systemid=locsystem.systemid and lochierarchy.siteid=locsystem.siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LONGDESCRIPTION",
            "target": "LONGDESCRIPTION",
            "remarks": "Relationship to the longdescription table, used to find all longdescription records for locations. The resulting set will contain zero or more objects.",
            "whereClause": "ldkey=:locationsid and ldownertable = 'LOCATIONS'",
            "cardinality": null
        },
        {
            "name": "MATRECTRANSIN",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions out of a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Transfer out tab of the Issues and Transfers application. An empty MatRecTrans set is required when the tab is initialized.",
            "whereClause": "1 > 2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSIN2",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to find the matrectrans records for all PO items in transit to the the storeroom location that do not require inspection.  The resulting set will contain one or more objects.",
            "whereClause": "matrectrans.ponum in (select ponum from poline,item b where poline.storeloc=:location and matrectrans.ponum=poline.ponum and matrectrans.polinenum=poline.polinenum and poline.itemnum = b.itemnum and poline.itemsetid=b.itemsetid and b.rotating = 0 and exists(select 1 from po where po.ponum=poline.ponum and po.internal= 1 and po.inspectionrequired= 0) and poline.tositeid = :siteid) and exists(select 1 from poline where ponum=matrectrans.ponum and tositeid=matrectrans.siteid and polinenum = matrectrans.polinenum and inspectionrequired = 0) and matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') and ( not exists (select 1 from matrectrans mat2 where mat2.receiptref = matrectrans.matrectransid) or (select sum(quantity) from matrectrans mat2 where mat2.receiptref = matrectrans.matrectransid) < matrectrans.quantity )",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATRECTRANSMOVEIN",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions to record the moving of a piece of rotating asset from a non-inventory location to an inventory location. (2<1). The resulting set will contain zero objects. This relationship is primarily used for the Move Asset action where a new MatRecTrans record is created for the move of rotating asset from a non-invneotry location to an inventory location. An inventory location refers to a location of type of STOREROOM, LABOR, or COURIER.",
            "whereClause": "2<1 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATRECTRANSOUT",
            "target": "MATRECTRANS",
            "remarks": "Relationship to the MatRecTrans table, used to create an empty set of material transfer transactions out of a given storeroom location. The where clause is (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Transfer out tab of the Issues and Transfers application. An empty MatRecTrans set is required when the tab is initialized.",
            "whereClause": "1>2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANS",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the material issue transactions to a given non-inventory location. (locations.location =matusetrans.location). The resulting set will contain zero or more objects. Non-inventory locations are any locations other than those of types of STOREROOM, LABOR, or COURIER.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MATUSETRANSISSUE",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, use to create an empty set of material issue transactions for a given storeroom location. (1>2). The resulting set will contain zero objects. This relationship is primarily used for the Issue tab of the Issues and Transfers application. An empty MatUseTrans set is required when the tab is initialized.",
            "whereClause": "1>2 and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MATUSETRANSRETURN",
            "target": "MATUSETRANS",
            "remarks": "Relationship to the MatUseTrans table, used to find the existing material issue transactions which can be returned to a given storeroom location. ( matusetrans.storeloc = locations.location and matusetrans.issueid is null and (matusetrans.qtyreturned is null OR matusetrans.qtyreturned < matusetrans.quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE')) and matusetrans.siteid=locations.siteid). The resulting set will contain zero or more objects. This relationship is primarily used for the Select Items for Returns action on the Issue tab of the Issues and Transfers application.",
            "whereClause": "storeloc = :location and quantity < 0 and issueid is null and (qtyreturned is null OR qtyreturned < quantity * -1) and issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue NOT IN ('KITBREAK','KITMAKE') ) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MEASUREMENTS",
            "target": "MEASUREMENT",
            "remarks": "Relationship to the Measurement table, used to find all measurements associated with the location. The WHERE clause is: measurement.location = locations.location and measurement.siteid = measurement.siteid. The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "MEASUREPOINT_ALL",
            "target": "MEASUREPOINT",
            "remarks": "Relationship to the Measurepoint table, used to find the measurepoints for a given location. (measurepoint.location = locations.location and measurepoint.siteid = locations.siteid ). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "METERGROUP",
            "target": "METERGROUP",
            "remarks": "Relationship to the MeterGroup table, used to find the MeterGroup object associated with this Location's GroupName. The WHERE clause is: metergroup.groupname = locations.groupname. The resulting set will contain one object.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "METERINGROUP",
            "target": "METERINGROUP",
            "remarks": "Relationship to the MeterInGroup table, used to find the MeterInGroup objects associated with this Location's GroupName. The WHERE clause is: meteringroup.groupname = locations.groupname. The resulting set will contain zero or more objects.",
            "whereClause": "groupname = :groupname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERLOCMR",
            "target": "MR",
            "remarks": "Relationship to the MR table, used to find the MRs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location = :location and siteid=:siteid and historyflag = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MULTIASSETLOCCI",
            "target": "MULTIASSETLOCCI",
            "remarks": "multiassetlocci record for the location",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "PERSON",
            "target": "PERSON",
            "remarks": "Relationship to the PERSON table, used to find the PERSON for the LOCATION. The resulting set will contain one object.",
            "whereClause": "location=:location and locationsite=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONBILLTO",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the bill to contact person for this storeroom (person.personid=locations.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:billtolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PERSONSHIPTO",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the ship to contact person for this storeroom (person.personid=locations.billtolaborcode) This relationship will find zero or one object.",
            "whereClause": "personid=:shiptolaborcode",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INVOWNER",
            "target": "PERSON",
            "remarks": "Relationship to the Person table, used to find the invowner person for this storeroom. This relationship will find zero or one object.",
            "whereClause": "personid=:invowner",
            "cardinality": null
        },
        {
            "name": "PLUSCDSASSETLINK",
            "target": "PLUSCDSASSETLINK",
            "remarks": "Relationship to PLUSCDSASSETLINK for the Attach Data Sheets dialog",
            "whereClause": "location=:location and revisionnum in (select revisionnum from plusdsplan where dsplannum=pluscdsassetlink.dsplannum and status in (select value from synonymdomain where domainid = 'PLUSCDSSTATUS' and maxvalue = 'APPR'))",
            "cardinality": null
        },
        {
            "name": "PLUSCLOCATIONWODS",
            "target": "PLUSCWODS",
            "remarks": "Relationship to the PLUSCWODS table through its related location used on View Calibration History dialog",
            "whereClause": "siteid = :siteid and location = :location",
            "cardinality": null
        },
        {
            "name": "PM",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the preventive maintenance records which contain the operating location. (locations.location = pm.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "PM_STORELOC",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find preventive maintenance records which use a given storeroom location. (locations.location = pm.storeloc). The resulting set will contain zero or more objects.",
            "whereClause": "storeloc = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMS",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the master preventive maintenance records to apply item assembly atructure using the operating location's ItemNum. (locations.itemnum = pm.masterpmitemnum and pm.applymasterpmtoloc = yes and pm.ismasterpm = yes and pm.pmnum NOT IN (Select masterpm from PM where location= locations.location) and pm.itemsetid = locations.itemsetid). The resulting set will contain zero or more objects. ItemNum is a non-persistent column for the Location object. See the attribute defined in psdi.app.location.Location for more information.",
            "whereClause": "pmnum not in (select a.masterpm from pm a where a.location = :location and a.siteid=:siteid and a.masterpm=pmnum) and exists (select * from masterpm where applympmtoloc=:yes and itemnum=:itemnum and itemsetid=:itemsetid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMVIAROUTE",
            "target": "PMVIAROUTE",
            "remarks": "Relationship to the locations non-persistent PMViaRoute records. (PMViaRoute is a non-persistent object, no where clause). The resulting set will contain zero objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEIN",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find internal PO lines for material transfers out of a given storeroom location which is the vendor specified on the PO. (poline.storeloc is not null and poline.receiptscomplete = :no and poline.ponum in (select po.ponum from po where po.storeloc = locations.location and po.storelocsiteid = locations.siteid and po.ponum=poline.ponum and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue IN ('APPR','INPRG')))). The resulting set will contain zero or more objects. This relationship is primarily used for the Select PO Items action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "poline.storeloc is not null and poline.storeloc = :location  and poline.receiptscomplete= :no and poline.tositeid = :siteid and exists (select 1 from po where po.ponum=poline.ponum and po.siteid=poline.siteid and po.internal= :yes and po.inspectionrequired= :no  and exists (select 1 from site a, site b where po.storelocsiteid=a.siteid and b.siteid=poline.tositeid and a.orgid=b.orgid and po.ponum=poline.ponum) and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "POLINEOUT",
            "target": "POLINE",
            "remarks": "Relationship to the POLine table, used to find internal PO lines for material transfers out of a given storeroom location which is the vendor specified on the PO. (poline.storeloc is not null and receiptscomplete = 0 and poline.ponum in (select ponum from po where po.storeloc=  locations.location and  po.storelocsiteid = locations.siteid and po.ponum=poline.ponum and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG'))) and (not exists(select 1 from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.fromsiteid = poline.siteid and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or ((select sum(quantity) from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.fromsiteid = poline.siteid and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty))). The resulting set will contain zero or more objects. This relationship is primarily used for the Select PO Items action on the Transfer Out tab of the Issues and Transfers application.",
            "whereClause": "poline.storeloc is not null and receiptscomplete = :no and poline.ponum in (select ponum from po where po.storeloc=  :location and  po.storelocsiteid = :siteid and po.ponum=poline.ponum and po.siteid=poline.siteid and po.status in (select value from synonymdomain where domainid='POSTATUS' and maxvalue in ('APPR','INPRG'))) and ( (not exists(select 1 from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or ((select sum(quantity) from matrectrans where matrectrans.courier is not null and matrectrans.tostoreloc is null and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and  matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty)) and (not exists(select 1 from matrectrans where matrectrans.courier is null and matrectrans.tostoreloc in ( select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue IN ('LABOR', 'COURIER'))) and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) or  ((select sum(quantity) from matrectrans where matrectrans.courier is null and matrectrans.tostoreloc in ( select location from locations where type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue IN ('LABOR','COURIER'))) and matrectrans.ponum = poline.ponum and matrectrans.polinenum = poline.polinenum and  matrectrans.issuetype in (select value from synonymdomain where domainid='ISSUETYP' and maxvalue = 'TRANSFER') ) < poline.orderqty)) ) and exists ( select 1 from invreserve where invreserve.ponum = poline.ponum and invreserve.location = :location and invreserve.storelocsiteid = :siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERLOCPO",
            "target": "POLINE",
            "remarks": "Relationship to the POLINE table, used to find the POs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and exists (select 1 from po where po.ponum=poline.ponum and po.historyflag = :no and po.siteid = poline.siteid and po.revisionnum=poline.revisionnum) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPERLOCPR",
            "target": "PRLINE",
            "remarks": "Relationship to the PRLINE table, used to find the PRs for the operating location. The resulting set will contain one or more objects.",
            "whereClause": "location= :location and exists (select 1 from pr where pr.prnum=prline.prnum and pr.historyflag = :no and pr.siteid = prline.siteid) and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEMLOC",
            "target": "PROBLEM",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "RECORDTIMEZONE",
            "target": "RECORDTIMEZONE",
            "remarks": "Get associated Time Zone.",
            "whereClause": "objectname = 'LOCATIONS' and objectid = :locationsid",
            "cardinality": null
        },
        {
            "name": "RECORDTIMEZONEDIALOG",
            "target": "RECORDTIMEZONEDIALOG",
            "remarks": "Used to show the Associate Time Zone Dialog Box.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "PMROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the route_stop records, used to find the route_stop records via PM for a given location.",
            "whereClause": "route in (select route from pm) and (location = :location and siteid=:siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ROUTE_STOP",
            "target": "ROUTE_STOP",
            "remarks": "Relationship to the Route_stop table, used to find the route stops identifying the location. (locations.location= route_stop.location). The resulting set will contain zero or more objects. A location can be part of multiple routes, and a location can appear multiple times within the same route.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZMAT",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for hazardous material enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=yes)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.hazmatenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXHAZPREC",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for precaution enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled= yes)). This relationship will contain zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.precautionenabled=:yes) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXICON",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find the lexicon of safety terms which contain the operating location. (locations.location =safetylexicon.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SAFETYLEXTAGOUT",
            "target": "SAFETYLEXICON",
            "remarks": "Relationship to the SafetyLexicon table, used to find the operating location's lexicon of safety terms for tagout enabled hazards. (safetylexicon.location = locations.location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=yes and safetylexicon.tagoutid is null)). This relationship will find zero or more objects.",
            "whereClause": "location = :location and exists (select 1 from hazard where hazard.hazardid=safetylexicon.hazardid and hazard.tagoutenabled=:yes and safetylexicon.tagoutid is null) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Service Address for Location",
            "whereClause": "addresscode = :saddresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "ADDRESSABLE_SERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Relationship from LOCATIONS (Addressable) that doesn't bring any Service Address, used to load a empty set to be used as based for a fake mbo creation.",
            "whereClause": "1 = 2",
            "cardinality": null
        },
        {
            "name": "SITE",
            "target": "SITE",
            "remarks": "Relationship to the Site table. (locations.siteid = site.siteid and locations.orgid = site.orgid). The resulting set will contain one object.",
            "whereClause": "siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SLA",
            "target": "SLA",
            "remarks": "Relationship to the SLA table, used to find the active SLAs for the location. The resulting set will contain one or more objects.",
            "whereClause": "sla.slanum in (select slanum from slaassetloc where slaassetloc.location=:location ) and sla.status in (select value from synonymdomain where domainid='SLASTATUS' and maxvalue ='ACTIVE')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ISSUETRANSFERSPARTPART",
            "target": "SPAREPART",
            "remarks": "Relationship to the sparepart records, used to find the sparepart records for a given storeroom.",
            "whereClause": "itemnum in (select itemnum from invbalances where location = :location and siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSETLOC",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to the SPRelatedAsset table, used to find the work order related assets for a given operating location. (locations.location=sprelatedasset.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPRELATEDASSETRELLOC",
            "target": "SPRELATEDASSET",
            "remarks": "Relationship to the SPRelatedAsset table, used to find the safety related assets for a given operating location. (locations.location=sprelatedasset.relatedlocation).  The resulting set will contain zero or more objects.",
            "whereClause": "relatedlocation=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SPWORKASSET",
            "target": "SPWORKASSET",
            "remarks": "Relationship to the SPWorkAsset table, used to find the safety plan work assets which contain the operating location specified as a work asset. (locations.location =spworkasset.worklocation). The resulting set will contain zero or more objects.",
            "whereClause": "worklocation = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SRLOC",
            "target": "SR",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STATUSDESC",
            "target": "SYNONYMDOMAIN",
            "remarks": "Relationship to synonymdomain table, used to find description for the status, it will contain one object.",
            "whereClause": "domainid='LOCASSETSTATUS' and value=:status and :&DOMAINFILTER&_STATUS",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TAGOUT",
            "target": "TAGOUT",
            "remarks": "Relationship to the TagOut table, used to find the assets tagged out identified by the operating location. (locations.location =tagout.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TICKET",
            "target": "TICKET",
            "remarks": "Relationship to the TICKET table, used to find the active tickets for the location. The resulting set will contain one or more objects.",
            "whereClause": "location=:location and assetsiteid=:siteid and ticket.status not in (select value from synonymdomain where domainid in ('SRSTATUS', 'INCIDENTSTATUS','PROBLEMSTATUS') and maxvalue in ('CLOSED', 'RESOLVED'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWTKT",
            "target": "TICKET",
            "remarks": "Relationship to ticket object.",
            "whereClause": "location=:location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the LOCATIONS to the non-persistent VIEWWOPMS table. (Nowhere clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WOCHANGELOC",
            "target": "WOCHANGE",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WORELEASELOC",
            "target": "WORELEASE",
            "remarks": "Relationship to TICKETS table.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPENWO",
            "target": "WORKORDER",
            "remarks": "Relationship to the WorkOrder table, used to find the open work orders at a given operating location. (locations.location =workorder.location and workorder.historyflag = no). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and historyflag = :no and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "OPENWOFORLOC",
            "target": "WORKORDER",
            "remarks": "Relationship to the workorder table, used to find the work orders for the Location. The resulting set will contain one or more objects.",
            "whereClause": "location = :location and historyflag = :no and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLWO",
            "target": "WORKORDER",
            "remarks": "WorkOrders by location,siteid",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        }
    ],
    "incomingRelationships": [
        {
            "name": "ENDLOCATION",
            "source": "AMCREW",
            "remarks": "Get end location for Crew",
            "whereClause": "location=:endlocation and siteid=:endlocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKLOCATION",
            "source": "AMCREW",
            "remarks": "Relationship to the locations table.  Used to find the location that is the crews work location, in the crews worksite.  The resultset will contain 0 or 1 object.",
            "whereClause": "location=:worklocation and siteid=:worksite",
            "cardinality": null
        },
        {
            "name": "STARTLOCATION",
            "source": "AMCREW",
            "remarks": "Get Start location for Crew",
            "whereClause": "location=:startlocation and siteid=:startlocsiteid",
            "cardinality": null
        },
        {
            "name": "AFFECTEDLOCATION",
            "source": "AREASAFFECTED",
            "remarks": "Relationship from Areas Affected Location to the Locations table - used to get location description.",
            "whereClause": "location=:affectedlocation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PLUSCLPLOC",
            "source": "ASSET",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset's loop location. (locations.location = asset.plusclploc). This resulting set will contain zero or one object.",
            "whereClause": "location = :plusclploc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCNEWLPLOC",
            "source": "ASSET",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset's new loop location. (locations.location = asset.pluscnewlploc). This resulting set will contain zero or one object.",
            "whereClause": "location = :pluscnewlploc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "REPAIRFACILITY",
            "source": "ASSET",
            "remarks": "Relationship to the Locations table, used to find all location records for a PMWorkGeneration record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "ASSET",
            "remarks": "Relationship to the Location table, used to find all locations for a given asset. (locations.location = asset.location). This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "NEWLOCATION",
            "source": "ASSET",
            "remarks": "Relationship to the destination Location table(new location the asset will have upon completion of a move, and is a non-persistent attribute),used to find all locations for a given asset in a given site. (locations.location = asset.newlocation and locations.siteid = asset.newsite). This resulting set will contain zero or one object.",
            "whereClause": "location = :newlocation and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ASSET_LOCATIONS",
            "source": "ASSET",
            "remarks": null,
            "whereClause": "location=:location and siteid = :siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "LOCATIONS",
            "source": "ASSETLOCCOMM",
            "remarks": "Relationship to the LOCATIONS table, used to find the asset records. The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELOCATION",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the Locations table,used to find location for a given sourcelocation",
            "whereClause": "location=:sourcelocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLOCATION",
            "source": "ASSETLOCRELATION",
            "remarks": "Relationship to the locations table, used to find location for a given targetlocation.",
            "whereClause": "location=:targetlocation",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SOURCELOCATION",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the Locations table,used to find location for a given sourcelocation",
            "whereClause": "location=:sourcelocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "TARGETLOCATION",
            "source": "ASSETLOCRELHIST",
            "remarks": "Relationship to the locations table, used to find location for a given targetlocation.",
            "whereClause": "location=:targetlocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DFLTNEWLOCATION",
            "source": "ASSETMOVEDFLT",
            "remarks": "Relationship to the location records, used to find the location records in a given site.",
            "whereClause": "location=:dfltnewlocation and siteid=:dfltnewsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "ASSIGNLOC",
            "remarks": "Relationship to the LOCATIONS table, used to find repair facility locations. This resulting set will contain one object.",
            "whereClause": "isrepairfacility=:yes",
            "cardinality": null
        },
        {
            "name": "REPLOCATION",
            "source": "ASSIGNREPLOC",
            "remarks": "Relationship to LOCATIONS table.",
            "whereClause": "location=:repairlocation and siteid=:replocsiteid",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "AUTOATTRUPDATE",
            "remarks": "Relationship to the locations table, used to find location . The result set will contain one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "CI",
            "remarks": "Relationship to the Locations table, used to find location for a given CI Location",
            "whereClause": "location=:location and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CILOCATION",
            "source": "CI",
            "remarks": "Relationship to the Locations table, used to find location for a given CI CILocation",
            "whereClause": "location=:cilocation and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "CLASSSPEC",
            "remarks": "Relationship to the Locations table, used to find all locations associated with a given class specification. (locations.classstructureid = classspec.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid =:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the Locations table, used to find all locations associated with the given class structure. (locations.classstructureid = classstructure.classstructureid).  The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the locations table, used to find the locations record for a given classsstructure. (classstructure.classstructureid=classspecusewith.classstructureid) The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid in (select classstructureid from classancestor where ancestor=:classstructureid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS_ONLY",
            "source": "CLASSSTRUCTURE",
            "remarks": "Relationship to the item table, used to find the locations records for a given classstructure. (classstructure.classstructureid = locations.classstructureid). The resulting set will contain zero or more objects.",
            "whereClause": "classstructureid=:classstructureid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the Locations table, used to find a Locations record for a given COLLECDETAIL. (LOCATIONS.location = COLLECTDETAILS.location). The resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid  = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "COMP_AS_LOCATION",
            "source": "COMPANIES",
            "remarks": null,
            "whereClause": "location=:location and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the Locations table, used to find all locations for a given contract asset. (contractasset.assetnum=locations.location and contractasset.orgid=locations.orgid and contractasset.siteid=locations.siteid)",
            "whereClause": "location=:location and orgid=:orgid and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Locations table, used to find information about the location which is being referenced by drilldown. ( locations.location = drilldown.locvalue). The resulting set will contain one object.",
            "whereClause": "location=:locvalue and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONSDDCHILDREN",
            "source": "DRILLDOWN",
            "remarks": "Relationship to the Locations table, used to find the children of the current location in focus in the drilldown hierarchy. (location in (select lochierarchy.location from lochierarchy where locations.siteid = lochierarchy.siteid and lochierarchy.parent = drilldown.locInHierarchy and lochierarchy.systemid = drilldown.systemid)). The resulting set will contain zero or more objects.",
            "whereClause": "location in (select lochierarchy.location from lochierarchy where lochierarchy.parent = :locinhierarchy and lochierarchy.systemid = :systemid and lochierarchy.siteid=:siteid) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "GENERATEWO",
            "remarks": "Relationship to the Locations table, used to find all location records for a GenerateWO record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "INVENTORY",
            "remarks": "Relationship to the Locations table, used to find the location for a given inventory record. (locations.location = inventory.location). The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS_ADDTOSTORE",
            "source": "INVENTORY",
            "remarks": "Relationship to the Locations table, used to find the location information for a given inventory record on column AddToStoreLoc. (locations.location = inventory.AddToStoreLoc). The resulting set will contain one object. Note: AddToStoreLoc is a non-persistent column for the Inventory object. See the attribute defined in psdi.app.inventory.Inventory for more information. This relationship is primarily used for the Add Item to Store action in the Item application.",
            "whereClause": "location = :addtostoreloc and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Locations table, used to find the location for a given invreserve record. Relationship to the Locations table, used to find the location for a given invreserve record.",
            "whereClause": "location=:location and siteid=:storelocsiteid",
            "cardinality": null
        },
        {
            "name": "OPLOCATIONS",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Locations table, used to find the location for a given invreserve record. This relationship will find zero or one object.",
            "whereClause": "location=:oplocation and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOLOCATIONS",
            "source": "INVRESERVE",
            "remarks": "Relationship to the Locations table, used to find the location information in a given site to which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "INVUSE",
            "remarks": "Relationship to the Locations table, used to find the location information for inventory usage. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Locations table, used to find the location information for inventory usage line. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "TOLOCATIONS",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Locations table, used to find the location information in a given site to which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid=:tositeid",
            "cardinality": null
        },
        {
            "name": "FROMLOCATION",
            "source": "INVUSELINE",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site from which the material is transferred. The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "ITEM",
            "remarks": "Relationship to the Locations table, used to find all locations for a given item. (locations.siteid=item.siteid and location in (select location from locoper where locations.location=locoper.location and locoper.itemnum=item.itemnum and locoper.itemsetid = item.itemsetid and locations.orgid=locoper.orgid)). The resulting set will contain zero or more objects.",
            "whereClause": "location in (select location from locoper where locations.location=locoper.location and locoper.itemnum=:itemnum and locoper.itemsetid=:itemsetid and locations.orgid=locoper.orgid and locations.siteid=locoper.siteid)",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship to the Work Asset's Location records, used to find the location records for a given work asset. (locations.location=jpassetsplink.location). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LABINVLOCCHANGE",
            "remarks": "Relationship to the labor table.  For access to the entire set.  (No whereclause.)  Returns 0 or more objects.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LABOR",
            "remarks": "Relationship to the Locations table.Used to find out Locations for the Labor. (Locations.location=Labor.laborcode). The resultset will contain zero, one or more objects.",
            "whereClause": "location=:laborcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ENDLOCATION",
            "source": "LABOR",
            "remarks": "Get end location for Labor",
            "whereClause": "location=:endlocation and siteid=:endlocsiteid",
            "cardinality": null
        },
        {
            "name": "LABINVENTORYLOC",
            "source": "LABOR",
            "remarks": "Relationship to the Location table.  Returns the location object for this labors labinventoryloc and organization.  (labor.labinventorysite=site.siteid and labor.orgid=site.orgid and labor.labinventoryloc=locations.location).  This returns zero or one object.",
            "whereClause": "siteid=:labinventorysite and orgid=:orgid and location=:labinventoryloc",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTLOCATION",
            "source": "LABOR",
            "remarks": "Get start location for Labor",
            "whereClause": "location=:startlocation and siteid=:startlocsiteid",
            "cardinality": null
        },
        {
            "name": "WORKLOCATION",
            "source": "LABOR",
            "remarks": "Relationship to the locations table.  Used to find the location that is the labors work location, in the labors worksite.  The resultset will contain 0 or 1 object.",
            "whereClause": "location=:worklocation and siteid=:worksite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "LABTRANS",
            "remarks": "Relationship to the Location table. Used to find out Location for the LabTrans. (Location.location=LabTrans.location). The resultset will contain at most  1 object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the Location table, used to get the Location associated with this LocationMeter. The WHERE clause is: locations.location = locationmeter.location and locations.siteid = locationmeter.siteid and locations.orgid =  locationmeter.orgid. The resulting set will contain one object.",
            "whereClause": "location = :location and siteid = :siteid and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS_ADDTOSTORE",
            "source": "LOCATIONS",
            "remarks": "Relationship to the Locations table, used to find the location linked to the current location's addItemToStore attribute. (Locations.location = Locations.AddToStoreLoc). The resulting set will contain one object. This relationship is primarily used in the Add Item To Store action of the Item application.",
            "whereClause": "location = :addtostoreloc and siteid = :addtostoresiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCPARENT_ADDRESSSYSTEM_HIERARCHY",
            "source": "LOCATIONS",
            "remarks": "This relationship returns the Parent Location of a Location based on the selected Address System hierarchy",
            "whereClause": "location in (select lochierarchy.parent from locsystem, lochierarchy where locsystem.siteid=lochierarchy.siteid and locsystem.systemid=lochierarchy.systemid and locsystem.address=:yes and lochierarchy.location=:location and lochierarchy.siteid=:siteid) and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the Location table, used to find the LOCATIONS record for a given LOCATIONSPEC. (locationspec.location=locations.location and locationspec.classstructureid = Locations.classstructureid and locationspec.siteid=locations.siteid). The resulting set will contain one object.",
            "whereClause": "location=:location and classstructureid =:classstructureid and siteid=:siteid ",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LOCATIONUSERCUST",
            "remarks": "Relationship to the locations table where location, site, and org match.  This will return zero or one record.",
            "whereClause": "location=:location and siteid=:siteid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LOCATIONWORKZONE",
            "remarks": "Relationship from locationworkzone to location",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "LOCAUTH",
            "remarks": "LocAuth to Locations, will be one record",
            "whereClause": "siteid = :siteid and location = :location",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHILDLOCATIONS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the Locations table, used to find the location's child nodes in the hierarchy. (lochierarchy.location = locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "NEWPARENT",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the Locations table, used to find the information for the operating location which is being entered as a new parent of the lochierarchy.  (locchierarchy.parent =locations.location). The resulting set will contain one object.",
            "whereClause": "location=:newparent and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the Locations table, used to find the Locations object associated with this LocHierarchy's Parent. The WHERE clause is: locations.location = lochierarchy.location and locations.siteid = lochierarchy.siteid. The resulting set will contain one object.",
            "whereClause": "location = :parent and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "LOCOPER",
            "remarks": "Relationship to Locations table, used to find the location record (locoper.location=locations.location). The resulting set will contain zero or more objects.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site to which the material is received or transferred. (location.location = matrectrans.tostoreloc and location.siteid = matrectrans.newsite). The resulting set will contain zero or one object.",
            "whereClause": "location=:tostoreloc and siteid = :newsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FROMLOCATION",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Locations table, used to find the storeroom in a given site from which the material is transferred. (location.location = matrectrans.fromstoreloc and location.siteid = matrectrans.fromsiteid). The resulting set will contain zero or one object.",
            "whereClause": "location=:fromstoreloc and siteid = :fromsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCSFORSITE",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the Locations table, used to find the locations for this site. The resulting set will contain none or one objects.",
            "whereClause": "siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the Locations table, used to find the location to which the material is issued.",
            "whereClause": "location=:location and siteid=:tositeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSTOREROOM",
            "source": "MAXUSER",
            "remarks": "Location record for user default storeroom",
            "whereClause": "siteid = :storeroomsite and location = :defstoreroom",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "MAXUSER",
            "remarks": "Relationship to the Locations table, used to find all location records for a User record. (location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location = :DEFAULTREPFAC and siteid=:DEFAULTREPFACSITEID",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the Location table, used to find the location for a given measure point. (locations.location = measurepoint.location). The resulting set will contain one object. Note: Location is a non-persistent attribute of the MeasurePoint object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "MR_LOCATIONS",
            "source": "MR",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "MR",
            "remarks": "Relationship to the Locations table, used to find all locations records for a given material requisition. (locations.location = mr.location). The resulting set will contain zero or more objects.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MOVETOLOCATION",
            "source": "MULTIASSETLOCCI",
            "remarks": "movetolocation for the MultiAssetLocCI",
            "whereClause": "location=:movetolocation and siteid=:movetosite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "MULTIASSETLOCCI",
            "remarks": "locations record for the multiassetlocci",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "MULTIPLE"
        },
        {
            "name": "LOCATIONS",
            "source": "NAMEDUSERS",
            "remarks": "Relationship to the Locations table, used to find locations  records for a given nameduser. (namedusers.location = locations.location and namedusers.orgid = locations.orgid). The resulting set will contain zero, one or more than one object.",
            "whereClause": "location = :location and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "PERSON",
            "remarks": "Relationship to the locations table. Used to find the default location of this person. (locations.location=person.location and locations.siteid=person.locationsite). The resulting set will be one record if person's location and site are not empty",
            "whereClause": "location=:location and siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "PLUSCJPDATASHEET",
            "remarks": "Relationship to the Location table, used to find the location associated with the jp datasheet. This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCWODSLOCATION",
            "source": "PLUSCWODS",
            "remarks": "Relationship between Work Order Data Sheets and Locations",
            "whereClause": "location =:location and orgid =:orgid and siteid =:siteid",
            "cardinality": null
        },
        {
            "name": "TAGLOCATION",
            "source": "PLUSCWODS",
            "remarks": "Relationship to the Location table, used to find the location associated with the WO datasheet tag location. This resulting set will contain zero or one object.",
            "whereClause": "location = :taglocation and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "PLUSCDSALLOCATION",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "location in (select location from pluscdsassetlink where dsplannum = :dsplannum) and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "ALLLOCATIONS",
            "source": "PLUSDSPLAN",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONNOTREADY",
            "source": "PM",
            "remarks": "Relationship to the PM's location records, used to find the not ready location records for a given PM. (location.assetnum = pm.assetnum and location.siteid=pm.siteid and status not in (select value from synonymdomain where maxvalue in (NOT READY) and domainid=LOCASSETSTATUS). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid and status in (select value from synonymdomain where maxvalue in ('NOT READY') and domainid='LOCASSETSTATUS')",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "PM",
            "remarks": "Relationship to the PM's Location records, used to find the location records for a given PM. (locations.location = pm.location). The resulting set will contain zero or one record.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "PMWORKGENERATION",
            "remarks": "Relationship to the Locations table, used to find all location records for a PMWorkGeneration record. (location=:repairfacility and siteid=:repfacsiteid). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "REORDERITEMS",
            "remarks": "Relationship to locations record. Used to find the location record for the storeloc of a given reorderitems record. (locations.location = reorderitems.storeloc). The resulting set will contain one object.",
            "whereClause": "location=:storeloc and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "REPFACAUTH",
            "remarks": "Relationship to the Locations table, used to find all location records for a REPFACAUTH record. (location = :REPAIRFACILITY and siteid=:SITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location = :REPAIRFACILITY and siteid=:SITEID",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to asset from route_stop will return 0 or 1 object.",
            "whereClause": "location=:location and siteid=:assetlocsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONS",
            "source": "ROUTES",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONSNOSITES",
            "source": "ROUTES",
            "remarks": "Select all locations from all sites",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to psdi.app.location.Location (locations.location = safetylexicon.location). Used to find the asset that is associated with this hazard or tagout. If location is not null, the result set will contain one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "SERVICEADDRESS",
            "remarks": "Location in Service Address",
            "whereClause": "saddresscode = :addresscode and orgid = :orgid",
            "cardinality": null
        },
        {
            "name": "HOLDINGLOC",
            "source": "SITE",
            "remarks": "Relationship to the locations table, used to find the holding location for this site with the same name as the site. (locations.siteid=site.siteid and locations.location=site.siteid  This relationship will find zero or one object.",
            "whereClause": "siteid=:siteid and location=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "SKDPROJECT",
            "remarks": "To get the Locations for a Schedule's Locations table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "SKDQUERY",
            "remarks": "To get the Locations for a Schedule's Locations table.",
            "whereClause": "1=1",
            "cardinality": null
        },
        {
            "name": "SLAASSETLOCLOCATIONDESC",
            "source": "SLAASSETLOC",
            "remarks": "Relationship to the Locations table, used to find the Locations records for a given SLAAssetLoc. (slaassetloc.location = locations.location). The resulting set will contain 0 or 1 object.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "STARTLOCATION",
            "source": "SLROUTE",
            "remarks": "Get Start location for SLROUTE",
            "whereClause": "location = :startlocation and siteid = :startlocsiteid",
            "cardinality": null
        },
        {
            "name": "ENDLOCATION",
            "source": "SLROUTE",
            "remarks": "Get end location for SLROUTE",
            "whereClause": "location = :endlocation and siteid = :endlocsiteid",
            "cardinality": null
        },
        {
            "name": "TOLOCATION",
            "source": "SLRTRAVELTIME",
            "remarks": "Get Start location for SLRTRavelTime",
            "whereClause": "locationsid=:tolocationsid",
            "cardinality": null
        },
        {
            "name": "FROMLOCATION",
            "source": "SLRTRAVELTIME",
            "remarks": "Get Start location for SLRTRavelTime",
            "whereClause": "locationsid=:fromlocationsid",
            "cardinality": null
        },
        {
            "name": "LOCCHILD",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to Location table. (locations.location = sprelatedasset.relatedlocation). Finds the related location. The result set will contain one object.",
            "whereClause": "location = :relatedlocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCPARENT",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to Location table. (locations.location = sprelatedasset.location). Finds the parent location. The result set will contain one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "TAGOUT",
            "remarks": "Relationship to Locations table. (locations.location = tagout.location). If location is not null, the result set will contain one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "TICKET",
            "remarks": null,
            "whereClause": "location=:location and siteid=:assetsiteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "TLOAMPRMDFLT",
            "remarks": "Relationship from Computer Promotion Defaults to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "TLOAMPRMVALUE",
            "remarks": "Relationship from Computer Promotion Values to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "TLOAMPROMOTE",
            "remarks": "Relationship from Computer Promotion to Locations. Returns zero or one record.",
            "whereClause": "location = :location and siteid = :siteid",
            "cardinality": null
        },
        {
            "name": "LOCATIONS",
            "source": "TOOLTRANS",
            "remarks": "Relationship to the Location table, used to find the location record for the given tool transaction. (asset.assetnum = tooltrans.assetnum). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEFSTOREROOM",
            "source": "USERSECUR",
            "remarks": "UserSecur to Locations, for default storeroom",
            "whereClause": "siteid = :storeroomsite and location = :defstoreroom",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "VIEWWOPMS",
            "remarks": "Used in the View WOs and PMs menu action.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the Locations table, used to find all locations for a given warranty asset. (warrantyasset.location=location.location and warrantyasset.locationsite=locations.siteid). The resulting set will contain zero or one object.",
            "whereClause": "location=:location and siteid=:locationsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Locations table, used to find all location records for a given Assignment Manager record. (location=:REPAIRFACILITY and siteid=:REPFACSITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        },
        {
            "name": "LOCATION",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the Location Table; used to find Locations that are related to the Work Orders of a set of WMAssignments.",
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "WOCONTRACT",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATIONS",
            "source": "WOGENFORECAST",
            "remarks": "Relationship to the locations Mbo for the location referenced on this Mbo. One or zero members.",
            "whereClause": "location=:location and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATIONS",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "WORKORDER",
            "remarks": "Relationship to the Locations table, used to find the location for a work order. (Locations.location = Workorder.location). This resulting set will contain zero or one object.",
            "whereClause": "location = :location and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "REPAIRFACILITY",
            "source": "WORKORDER",
            "remarks": "Relationship to the Locations table, used to find all location records for a given Work Order record. (location=:REPAIRFACILITY and siteid=:REPFACSITEID). The resulting set will contain zero or more objects.",
            "whereClause": "location=:repairfacility and siteid=:repfacsiteid",
            "cardinality": null
        },
        {
            "name": "WO_WORKLOCATION",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "location=:worklocation and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_LOCATION",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "location=:location and siteid=:siteid",
            "cardinality": "SINGLE"
        },
        {
            "name": "WOALLLOCATIONS",
            "source": "WORKORDER",
            "remarks": "Relationship to the workorder's location records, used to find the location records for a given workorder and its children.",
            "whereClause": "(location=:location or location in (select location from workorder where parent=:wonum and location is not null)) and siteid=:siteid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "ALLLOCATION",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the Location table, used to find the location for a given work plan material. (type in ( 'STROEROOM','LABOR','COURIER')). This resulting set will contain zero or more objects.",
            "whereClause": "type in (select value from synonymdomain where domainid='LOCTYPE' and maxvalue in ('STOREROOM','LABOR','COURIER')) and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "LOCATION",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the Location table, used to find the location for a given work plan material. (location in ( select location from inventory where inventory.itemnum=wpmaterial.itemnum  and locations.itemsetid = wpmaterial.itemsetid)). This resulting set will contain zero or more objects.",
            "whereClause": "location in ( select location from inventory where inventory.itemnum=:itemnum and inventory.itemsetid = :itemsetid) and siteid=:storelocsite",
            "cardinality": "UNDEFINED"
        }
    ]
}
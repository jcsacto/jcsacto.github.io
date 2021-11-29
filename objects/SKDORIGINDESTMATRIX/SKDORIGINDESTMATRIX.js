mos = {
    "objectName": "SKDORIGINDESTMATRIX",
    "className": "com.ibm.tivoli.maximo.skd.app.SKDOriginDestMatrixSet",
    "description": "Destination Travel Time matrix table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "SKDORIGINDESTMATRIXID",
    "primaryKeyColumns": [
        "FROMSERVICEADDRESS",
        "TOSERVICEADDRESS",
        "FROMWORKORDER",
        "TOWORKORDER",
        "ORGID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "ORGANIZATION",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Change By",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, FROMSERVICEADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "From Service Address",
            "longDescription": null
        },
        {
            "objectName": "SERVICEADDRESS",
            "targetObject": "SKDORIGINDESTMATRIX",
            "parentKeys": "ORGID, ADDRESSCODE",
            "targetKeys": "ORGID, TOSERVICEADDRESS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "To Service Address",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "FROMSERVICEADDRESS",
            "required": false,
            "persistent": true,
            "title": "From Service Address",
            "remarks": "Source address when the travel time should start.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "TOSERVICEADDRESS",
            "required": false,
            "persistent": true,
            "title": "To Service Address",
            "remarks": "Destination address when the travel time should end.",
            "sameAsAttribute": "ADDRESSCODE",
            "sameAsObject": "SERVICEADDRESS"
        },
        {
            "attributeName": "FROMWORKORDER",
            "required": false,
            "persistent": true,
            "title": "From Work Location",
            "remarks": "Work order identification of the from work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TOWORKORDER",
            "required": false,
            "persistent": true,
            "title": "To Work Location",
            "remarks": "Work order identification of the to work location.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "TRAVELTIME",
            "required": true,
            "persistent": true,
            "title": "Travel Time",
            "remarks": "The amount of time needed to travel between the service addresses. This value can be calculated by the map provider, or you can enter a value in the format HH:MM.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCE",
            "required": false,
            "persistent": true,
            "title": "Source",
            "remarks": "Source of the travel time entry, either user entry or map provider.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "The user who modified the travel time.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time the travel time was modified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MEMO",
            "required": false,
            "persistent": true,
            "title": "Comments",
            "remarks": "Notes about the travel time.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REVERSEUPDATE",
            "required": false,
            "persistent": false,
            "title": "Reverse Update",
            "remarks": "Indicates reverse travel time matrix should be added with the travel time specified.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SKDORIGINDESTMATRIXID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TOSERVICEADDRESS",
            "target": "SERVICEADDRESS",
            "remarks": "Relationship to the SERVICEADDRESS table, used to get the SERVICEADDRESS records for a given toserviceaddress.",
            "whereClause": "addresscode=:toserviceaddress and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "REVERSEUPDATE",
            "target": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SERVICEADDRESS table, used to get the SERVICEADDRESS records for a given toserviceaddress.",
            "whereClause": "fromserviceaddress=:toserviceaddress and toserviceaddress=:fromserviceaddress and orgid=:orgid",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "FROMSKDORIGINDESTMATRIX",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and toserviceaddress is not null",
            "cardinality": null
        },
        {
            "name": "FROMSKDORIGINDESTMATRIXNOTUSER",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress and source is not USER.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and source not in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "FROMSKDORIGINDESTMATRIXUSER",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given FromServiceAddress and source as USER.",
            "whereClause": "fromserviceaddress=:addresscode and orgid=:orgid and source in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIX",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIXNOTUSER",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress and source is not USER.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid and source not in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "TOSKDORIGINDESTMATRIXUSER",
            "source": "SERVICEADDRESS",
            "remarks": "Relationship to the SKDORIGINDESTMATRIX table, used to get the SKDORIGINDESTMATRIX records for a given ToServiceAddress and source as USER.",
            "whereClause": "toserviceaddress=:addresscode and orgid=:orgid and source in ( select value from synonymdomain where domainid='SOURCE' and maxvalue='USER')",
            "cardinality": null
        },
        {
            "name": "REVERSEUPDATE",
            "source": "SKDORIGINDESTMATRIX",
            "remarks": "Relationship to the SERVICEADDRESS table, used to get the SERVICEADDRESS records for a given toserviceaddress.",
            "whereClause": "fromserviceaddress=:toserviceaddress and toserviceaddress=:fromserviceaddress and orgid=:orgid",
            "cardinality": null
        }
    ]
}
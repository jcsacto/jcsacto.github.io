mos = {
    "objectName": "DMDEPENDENCY",
    "className": "psdi.dm.DMDependencySet",
    "description": "Configuration group dependency",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DMDEPENDENCYID",
    "primaryKeyColumns": [
        "DEPENDINGGROUP",
        "DEPENDENTGROUP"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "DEPENDENTGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager Dependent group.",
            "longDescription": null
        },
        {
            "objectName": "DMCFGGROUP",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "CFGOBJGROUP",
            "targetKeys": "DEPENDINGGROUP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Migration group used by Migration Manager Dependending group.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "DMDEPENDENCY",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "DMDEPENDENCYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DEPENDINGGROUP",
            "required": true,
            "persistent": true,
            "title": "Depending Group",
            "remarks": "Identifies a configuration object group that depends upon another group",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "DEPENDENTGROUP",
            "required": true,
            "persistent": true,
            "title": "Dependent Migration Group",
            "remarks": "Identifies a configuration object group on which another group is dependent",
            "sameAsAttribute": "CFGOBJGROUP",
            "sameAsObject": "DMCFGGROUP"
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Change By",
            "remarks": "User ID of the user that changed this record",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Date and time information when record was last changed",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DEPENDENTGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship to get the details of a dependent group",
            "whereClause": "cfgobjgroup=:dependentgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMCFGGROUP",
            "target": "DMCFGGROUP",
            "remarks": "Relationship for deployment group dependencies",
            "whereClause": "cfgobjgroup =:dependinggroup",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "DMDEPENDENCY",
            "source": "DMCFGGROUP",
            "remarks": "Relationship for deployment group dependencies",
            "whereClause": "dependinggroup =:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DEPENDENTGROUP",
            "source": "DMCFGGROUP",
            "remarks": "Relationship to get the dependent groups on this group",
            "whereClause": "dependentgroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DMDEPENDENCY",
            "source": "DMPKGCFGGRPDEF",
            "remarks": "Relationship to get a deployment group' depending groups",
            "whereClause": "dependinggroup=:cfgobjgroup",
            "cardinality": "UNDEFINED"
        }
    ]
}
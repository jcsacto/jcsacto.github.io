mos = {
    "objectName": "DPAMSOFTWARE",
    "className": "psdi.app.dpamsw.DPAMSoftwareSet",
    "description": "Deployed Assets Software Conversion Target",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "SOFTWAREID",
    "primaryKeyColumns": [
        "SOFTWAREID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "SOFTWAREID",
            "required": true,
            "persistent": true,
            "title": "Software",
            "remarks": "Software ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOFTWARENAME",
            "required": true,
            "persistent": true,
            "title": "Target Software",
            "remarks": "Target name for the software application. Software names that match the variants specified in the software conversion record are translated to this target name when deployed asset data is displayed in Maximo and when reports are generated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COMPLIANCESETTING",
            "required": false,
            "persistent": true,
            "title": "Compliance Setting",
            "remarks": "Specifies whether the software application is authorized or prohibited in your enterprise. You can leave the field blank or click the Select Value icon to choose either authorized or prohibited as a value for this field. Maximo uses this field to determine software compliance.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALIDATED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the software conversion record. The purpose of this field is to identify new records imported into Maximo, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Software Conversion application. By default, Maximo Fusion clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each Maximo Fusion import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box. Note that when Maximo displays deployed asset software data, translating a variant to a target name does not depend on the setting in this check box; if a software application name matches a variant, Maximo translates it to the target name without regard to the setting in the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DPAMSWMOVE",
            "target": "DPAMSWMOVE",
            "remarks": null,
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMSOFTWARE_DPAMSWSUITECOMP",
            "target": "DPAMSWSUITECOMP",
            "remarks": "Relationship to find the Software Suite Components for this software target name",
            "whereClause": "softwarename=:softwarename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMSWVARIANT",
            "target": "DPAMSWVARIANT",
            "remarks": null,
            "whereClause": "softwarename = :softwarename",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MOVEDVARIANTSOWNER",
            "source": "DPAMSWMOVE",
            "remarks": "Links the target set back to the move variant action object",
            "whereClause": "softwarename=:softwarename",
            "cardinality": "UNDEFINED"
        }
    ]
}
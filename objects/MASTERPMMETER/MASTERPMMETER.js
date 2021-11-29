mos = {
    "objectName": "MASTERPMMETER",
    "className": "psdi.app.masterpm.MasterPMMeterSet",
    "description": "The Master PM Meter table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MASTERPMMETERID",
    "primaryKeyColumns": [
        "MASTERPMNUM",
        "METERNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "METER",
            "targetObject": "MASTERPMMETER",
            "parentKeys": "METERNAME",
            "targetKeys": "METERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Meter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "MASTERPMNUM",
            "required": true,
            "persistent": true,
            "title": "Master PM",
            "remarks": "Unique identifier for master pm",
            "sameAsAttribute": "PMNUM",
            "sameAsObject": "PM"
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
            "attributeName": "ALERTLEAD",
            "required": false,
            "persistent": true,
            "title": "Alert Lead",
            "remarks": "Alert Lead",
            "sameAsAttribute": "ALERTLEAD",
            "sameAsObject": "PMMETER"
        },
        {
            "attributeName": "FREQUENCY",
            "required": false,
            "persistent": true,
            "title": "Frequency",
            "remarks": "Frequency",
            "sameAsAttribute": "FREQUENCY",
            "sameAsObject": "PMMETER"
        },
        {
            "attributeName": "TOLERANCE",
            "required": false,
            "persistent": true,
            "title": "Generate WO Ahead By",
            "remarks": "Tolerance",
            "sameAsAttribute": "FREQUENCY",
            "sameAsObject": "PMMETER"
        },
        {
            "attributeName": "INITIALREADING",
            "required": false,
            "persistent": true,
            "title": "First Start Reading",
            "remarks": "Initial Reading",
            "sameAsAttribute": "READING",
            "sameAsObject": "METERREADING"
        },
        {
            "attributeName": "UPDMETERBASEDFREQ",
            "required": true,
            "persistent": true,
            "title": "Update Meter Based Information in Existing PMs",
            "remarks": "Update meter based frequency",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MASTERPMMETERID",
            "required": true,
            "persistent": true,
            "title": "MASTERPMMETERID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "METER",
            "target": "METER",
            "remarks": "Relationsip to the MasterPMMeters Meter records,used to find all meter records for a given MasterPMMeter",
            "whereClause": "metername=:metername",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MASTERPMMETER",
            "source": "MASTERPM",
            "remarks": "Relationsip to the MasterPMs PMMeter records,used to find all MasterPMMeter records for a given MasterPM",
            "whereClause": "masterpmnum=:masterpmnum",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "UPDASSOPMMETER",
            "source": "MASTERPM",
            "remarks": "Relationsip to the MasterPMs PMMeter records,used to find all MasterPMMeter (with updmeterbasedfree=true) records for a given MasterPM",
            "whereClause": "masterpmnum=:masterpmnum and updmeterbasedfreq=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MASTERPMMETER",
            "source": "METER",
            "remarks": "Relationship to the MasterPMMeter table, used to find all masterpmmeters having this meter. (masterpmmeter.metername = meter.metername). The resulting set will contain zero or more objects.",
            "whereClause": "metername = :metername",
            "cardinality": "UNDEFINED"
        }
    ]
}